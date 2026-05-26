import { useEffect, useMemo, useState } from 'react';
import { Alert, Card, Flex, Space, Tag, Typography } from 'antd';
import { buildBoardDiagram } from '../roadmaps/diagram-generator';
import type { DeepLesson, Tutorial } from '../roadmaps/types';
import { getTeachingLesson, hasTeachingLesson, TEACHING_LESSONS } from '../roadmaps/teaching-registry';
import type { TeachingLesson } from '../roadmaps/teaching-types';
import { ExcalidrawSvg } from './ExcalidrawSvg';
import { LessonBlackboard } from './LessonBlackboard';

const { Title, Paragraph } = Typography;

const CUSTOM_BOARD_IDS = new Set([
  '9-pCsW650T1mfj5dmRB9L', 'utA1W2O6pzoV_LbtDE5DN', 'R12sArWVpbIs_PHxBqVaR', 'KWTbEVX_WxS8jmSaAX3Fe',
  'ZhSuu2VArnzPDp6dPQQSC', 'hkxw9jPGYphmjhTjw8766', 'x-WBJjBd8u93ym5gtxGsR', 'P82WFaTPgQEPNp5IIuZ1Y',
  'yCnn-NfSxIybUQ2iTuUGq', 'SiYUdtYMDImRPmV2_XPkH', 'oyg5g4-cY5EBEUgVkjnL3', 'aqMaEY8gkKMikiqleV5EP',
  'NvUcSDWBhzJZ31nzT4UlE',
]);

export const CUSTOM_TEACHING_LESSON_IDS = new Set(Object.keys(TEACHING_LESSONS));

export const isCustomTeachingLesson = (id?: string) => hasTeachingLesson(id);

function GitTeachingBlackboard({ tutorial, lesson, active, onPick }: { tutorial: Tutorial; lesson: TeachingLesson; active: number; onPick: (index: number) => void }) {
  return (
    <button type="button" className="git-excalidraw-card" onClick={() => onPick(active)}>
      <ExcalidrawSvg raw={lesson.rawDiagram} label={`${tutorial.zh} 图解`} />
    </button>
  );
}

function GenericStepBlackboard({ tutorial, lesson, active, onPick }: { tutorial: Tutorial; lesson: DeepLesson; active: number; onPick: (index: number) => void }) {
  const diagram = useMemo(
    () => buildBoardDiagram(tutorial.id, tutorial.zh, tutorial.en, lesson.route),
    [tutorial.id, tutorial.zh, tutorial.en, lesson.route],
  );
  return <LessonBlackboard diagram={diagram} boardId={tutorial.id} active={active} onPick={onPick} />;
}

function isTeachingLesson(lesson: DeepLesson): lesson is TeachingLesson {
  return 'heading' in lesson && 'rawDiagram' in lesson;
}

function FoundationBlackboard({ tutorial, lesson, active, onPick }: { tutorial: Tutorial; lesson: DeepLesson; active: number; onPick: (index: number) => void }) {
  if (isTeachingLesson(lesson)) {
    return <GitTeachingBlackboard tutorial={tutorial} lesson={lesson} active={active} onPick={onPick} />;
  }

  if (!CUSTOM_BOARD_IDS.has(tutorial.id)) {
    return <GenericStepBlackboard tutorial={tutorial} lesson={lesson} active={active} onPick={onPick} />;
  }

  const id = tutorial.id;
  const pick = (index: number) => () => onPick(index);
  const activeClass = (index: number) => (active === index ? ' active' : '');

  const commonDefs = (
    <defs>
      <marker id={`chalk-arrow-${id}`} markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
        <path d="M2,2 L10,6 L2,10" className="chalk-arrow-head" />
      </marker>
      <filter id={`paper-shadow-${id}`} x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#5b4630" floodOpacity="0.12" />
      </filter>
    </defs>
  );

  const line = (d: string, index?: number) => <path d={d} className={`chalk-line${index === undefined ? '' : activeClass(index)}`} markerEnd={`url(#chalk-arrow-${id})`} />;
  const box = (x: number, y: number, w: number, h: number, title: string, sub?: string, index?: number) => (
    <g className={`chalk-box${index === undefined ? '' : activeClass(index)}`} onClick={index === undefined ? undefined : pick(index)}>
      <rect x={x} y={y} width={w} height={h} rx="14" />
      <text x={x + w / 2} y={y + 34} textAnchor="middle" className="chalk-title">{title}</text>
      {sub && <text x={x + w / 2} y={y + 58} textAnchor="middle" className="chalk-sub">{sub}</text>}
    </g>
  );

  const label = (x: number, y: number, text: string) => <text x={x} y={y} className="chalk-label">{text}</text>;

  return (
    <div className="foundation-board">
      <svg viewBox="0 0 760 360" role="img" aria-label={`${tutorial.zh} 黑板图`}>
        {commonDefs}

        {id === '9-pCsW650T1mfj5dmRB9L' && (
          <>
            <text x="36" y="42" className="board-heading">HTML 像房子的结构图：标签搭骨架，浏览器把它读成 DOM 树</text>
            <g className="chalk-code" onClick={pick(0)}>
              <rect x="34" y="82" width="304" height="218" rx="18" />
              <text x="62" y="122">&lt;form&gt;</text>
              <text x="92" y="160">&lt;input name="keyword" /&gt;</text>
              <text x="92" y="198">&lt;button&gt;搜索&lt;/button&gt;</text>
              <text x="62" y="236">&lt;/form&gt;</text>
              <text x="62" y="278" className="chalk-hint">左边是你写的 HTML 标签</text>
            </g>
            <path d="M350 188 C392 154, 420 154, 462 188" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <g className="dom-tree">
              <g className={`internet-card dns ${activeClass(3)}`} onClick={pick(3)}>
                <rect x="472" y="72" width="154" height="64" rx="16" />
                <text x="549" y="112" textAnchor="middle" className="card-title">form</text>
              </g>
              <g className={`internet-card ${activeClass(1)}`} onClick={pick(1)}>
                <rect x="404" y="190" width="132" height="64" rx="16" />
                <text x="470" y="228" textAnchor="middle" className="card-title">input</text>
              </g>
              <g className={`internet-card ${activeClass(2)}`} onClick={pick(2)}>
                <rect x="586" y="190" width="132" height="64" rx="16" />
                <text x="652" y="228" textAnchor="middle" className="card-title">button</text>
              </g>
              <path d="M548 136 L470 190" className="story-arrow" />
              <path d="M558 136 L652 190" className="story-arrow" />
              <text x="558" y="316" textAnchor="middle" className="card-title">右边是浏览器理解后的 DOM 树</text>
            </g>
          </>
        )}

        {id === 'utA1W2O6pzoV_LbtDE5DN' && (
          <>
            <text x="36" y="42" className="board-heading">CSS 像装修说明：先选中元素，再决定盒子大小、位置和层级</text>
            <g onClick={pick(0)}>
              <rect x="54" y="86" width="198" height="70" rx="14" className="chalk-paper" />
              <text x="82" y="130" className="chalk-title">.card button</text>
              <text x="74" y="184" className="card-title">选择器：先选中谁</text>
            </g>
            {line('M264 120 H338', 0)}
            <g onClick={pick(1)} className="box-model">
              <rect x="352" y="76" width="260" height="180" rx="14" className="margin-box" />
              <rect x="388" y="112" width="188" height="108" rx="12" className="border-box" />
              <rect x="424" y="142" width="116" height="48" rx="8" className="content-box" />
              <text x="485" y="164" textAnchor="middle">内容</text>
              <text x="482" y="100" textAnchor="middle">margin 外边距</text>
              <text x="482" y="136" textAnchor="middle">border / padding</text>
            </g>
            <g className={`internet-card ${activeClass(2)}`} onClick={pick(2)}>
              <rect x="82" y="250" width="168" height="58" rx="14" />
              <text x="166" y="286" textAnchor="middle" className="card-title">Flex / Grid 排队</text>
            </g>
            <g className={`internet-card address ${activeClass(3)}`} onClick={pick(3)}>
              <rect x="330" y="264" width="168" height="58" rx="14" />
              <text x="414" y="300" textAnchor="middle" className="card-title">层叠：谁覆盖谁</text>
            </g>
            <path d="M252 280 H326" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}

        {id === 'R12sArWVpbIs_PHxBqVaR' && (
          <>
            <text x="36" y="42" className="board-heading">HTTP 像一张标准业务单：写清楚我要做什么、找谁、带什么材料</text>
            <g className="request-card">
              <rect x="44" y="78" width="310" height="224" rx="18" />
              <text x="72" y="118" className={active === 0 ? 'chalk-hot' : ''} onClick={pick(0)}>GET  /users/123</text>
              <text x="72" y="154" className={active === 1 ? 'chalk-hot' : ''} onClick={pick(1)}>URL: 要操作哪个资源</text>
              <text x="72" y="190" className={active === 2 ? 'chalk-hot' : ''} onClick={pick(2)}>Header: Authorization...</text>
              <text x="72" y="226" className={active === 3 ? 'chalk-hot' : ''} onClick={pick(3)}>Body: {"{ name: 'tu' }"}</text>
              <text x="72" y="270" className="chalk-hint">请求单 = Method + URL + Header + Body</text>
            </g>
            <path d="M360 188 C398 178, 420 178, 454 188" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <g className={`internet-card server ${activeClass(3)}`}>
              <rect x="466" y="130" width="126" height="84" rx="18" />
              <text x="529" y="166" textAnchor="middle" className="card-title">后端</text>
              <text x="529" y="190" textAnchor="middle" className="mini-text">按规则处理</text>
            </g>
            <path d="M596 188 C626 190, 640 206, 650 230" className={`story-arrow ${activeClass(4)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <g className={`internet-card address ${activeClass(4)}`} onClick={pick(4)}>
              <rect x="620" y="240" width="110" height="60" rx="14" />
              <text x="675" y="276" textAnchor="middle" className="card-title">200 / 404</text>
            </g>
          </>
        )}

        {id === 'KWTbEVX_WxS8jmSaAX3Fe' && (
          <>
            <text x="36" y="42" className="board-heading">HTTP 缓存：能用本地副本就别跑远路，拿不准再问服务器</text>
            <g className={`internet-card browser ${activeClass(0)}`}>
              <rect x="42" y="126" width="134" height="72" rx="16" />
              <text x="109" y="156" textAnchor="middle" className="card-title">浏览器</text>
              <text x="109" y="180" textAnchor="middle" className="mini-text">想要 logo.png</text>
            </g>
            <g className={`internet-card dns ${activeClass(1)}`} onClick={pick(1)}>
              <rect x="286" y="74" width="158" height="76" rx="16" />
              <text x="365" y="106" textAnchor="middle" className="card-title">本地缓存</text>
              <text x="365" y="130" textAnchor="middle" className="mini-text">没过期，直接用</text>
            </g>
            <g className={`internet-card server ${activeClass(2)}`} onClick={pick(2)}>
              <rect x="286" y="226" width="158" height="76" rx="16" />
              <text x="365" y="258" textAnchor="middle" className="card-title">服务器</text>
              <text x="365" y="282" textAnchor="middle" className="mini-text">权威版本</text>
            </g>
            <g className={`internet-card address ${activeClass(1)}`}>
              <rect x="574" y="126" width="128" height="72" rx="16" />
              <text x="638" y="156" textAnchor="middle" className="card-title">直接显示</text>
              <text x="638" y="180" textAnchor="middle" className="mini-text">快</text>
            </g>
            <path d="M178 150 C224 96, 244 100, 282 112" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M446 112 C500 102, 534 130, 570 154" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M178 174 C224 254, 244 260, 282 264" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M446 264 C518 258, 552 208, 574 174" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <text x="364" y="190" textAnchor="middle" className="card-title">强缓存：不发请求</text>
            <text x="364" y="334" textAnchor="middle" className="card-title">协商缓存：ETag / 304，只确认有没有变</text>
          </>
        )}

        {id === 'ZhSuu2VArnzPDp6dPQQSC' && (
          <>
            <text x="36" y="42" className="board-heading">域名是给人看的名字，IP 才是机器真正要去的门牌号</text>
            <g className={`internet-card address ${activeClass(0)}`} onClick={pick(0)}>
              <rect x="58" y="118" width="158" height="76" rx="18" />
              <text x="137" y="150" textAnchor="middle" className="card-title">github.com</text>
              <text x="137" y="174" textAnchor="middle" className="mini-text">人类好记</text>
            </g>
            <g className={`internet-card dns ${activeClass(1)}`} onClick={pick(1)}>
              <rect x="304" y="82" width="158" height="92" rx="18" />
              <path d="M330 106 H434 M330 130 H412 M330 154 H430" className="book-lines" />
              <text x="383" y="202" textAnchor="middle" className="card-title">DNS 记录：A / CNAME / MX</text>
            </g>
            <g className={`internet-card server ${activeClass(2)}`} onClick={pick(2)}>
              <rect x="560" y="118" width="146" height="76" rx="18" />
              <text x="633" y="150" textAnchor="middle" className="card-title">140.82.x.x</text>
              <text x="633" y="174" textAnchor="middle" className="mini-text">机器地址</text>
            </g>
            <path d="M218 154 H300" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M464 154 H556" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <g className={`internet-card browser ${activeClass(3)}`} onClick={pick(3)}>
              <rect x="300" y="252" width="172" height="60" rx="16" />
              <text x="386" y="288" textAnchor="middle" className="card-title">HTTPS 证书也看域名</text>
            </g>
            <path d="M386 210 V248" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}

        {id === 'hkxw9jPGYphmjhTjw8766' && (
          <>
            <text x="36" y="42" className="board-heading">DNS 像层层问路：先问缓存，不知道再一路问到权威答案</text>
            {box(30, 112, 118, 64, '浏览器缓存', '先翻笔记', 0)}
            {box(176, 112, 118, 64, '递归 DNS', '帮你问', 1)}
            {box(322, 112, 118, 64, '根域', '问 .com', 2)}
            {box(468, 112, 118, 64, '.com', '问 github', 2)}
            {box(614, 112, 118, 64, '权威 DNS', '最终答案', 3)}
            <path d="M150 144 H172" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M296 144 H318" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M442 144 H464" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M588 144 H610" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <g className={`internet-card address ${activeClass(4)}`} onClick={pick(4)}>
              <rect x="288" y="242" width="184" height="64" rx="16" />
              <text x="380" y="278" textAnchor="middle" className="card-title">TTL：答案能缓存多久</text>
            </g>
            <text x="380" y="334" textAnchor="middle" className="card-title">改 DNS 不马上生效，常常是 TTL 还没过</text>
          </>
        )}

        {id === 'x-WBJjBd8u93ym5gtxGsR' && (
          <>
            <text x="36" y="42" className="board-heading">HTTPS = HTTP 放进加密信封，再检查收件人是不是真的</text>
            <g className={`internet-card browser ${activeClass(0)}`} onClick={pick(0)}>
              <rect x="50" y="124" width="132" height="72" rx="16" />
              <text x="116" y="156" textAnchor="middle" className="card-title">浏览器</text>
              <text x="116" y="180" textAnchor="middle" className="mini-text">我要安全连接</text>
            </g>
            <g className={`internet-card dns ${activeClass(1)}`} onClick={pick(1)}>
              <rect x="286" y="72" width="174" height="76" rx="16" />
              <text x="373" y="104" textAnchor="middle" className="card-title">证书</text>
              <text x="373" y="128" textAnchor="middle" className="mini-text">证明我是这个域名</text>
            </g>
            <g className={`internet-card address ${activeClass(2)}`} onClick={pick(2)}>
              <rect x="286" y="226" width="174" height="76" rx="16" />
              <text x="373" y="258" textAnchor="middle" className="card-title">会话密钥</text>
              <text x="373" y="282" textAnchor="middle" className="mini-text">本次专用暗号</text>
            </g>
            <g className={`internet-card server ${activeClass(3)}`} onClick={pick(3)}>
              <rect x="584" y="124" width="132" height="72" rx="16" />
              <text x="650" y="156" textAnchor="middle" className="card-title">服务器</text>
              <text x="650" y="180" textAnchor="middle" className="mini-text">解密处理</text>
            </g>
            <path d="M184 148 C226 102, 248 100, 282 108" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M462 108 C510 104, 540 126, 580 148" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M184 176 C226 252, 248 260, 282 264" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M462 264 C526 252, 556 194, 580 176" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <text x="380" y="334" textAnchor="middle" className="card-title">别人能看到你连了谁，但看不到里面的 HTTP 明文</text>
          </>
        )}

        {id === 'P82WFaTPgQEPNp5IIuZ1Y' && (
          <>
            <text x="36" y="42" className="board-heading">浏览器像加工流水线：下载资源，解析结构，算位置，最后画成页面</text>
            {box(34, 112, 112, 62, '下载资源', 'Network', 0)}
            {box(178, 112, 112, 62, '解析', 'DOM/CSSOM', 1)}
            {box(322, 112, 112, 62, '布局', '算位置', 2)}
            {box(466, 112, 112, 62, '绘制', '画像素', 3)}
            {box(610, 112, 112, 62, '交互', 'JS 改页面', 4)}
            <path d="M148 143 H174" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M292 143 H318" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M436 143 H462" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M580 143 H606" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <g className="mini-browser">
              <rect x="210" y="236" width="330" height="76" rx="12" />
              <circle cx="234" cy="258" r="5" />
              <circle cx="252" cy="258" r="5" />
              <rect x="232" y="276" width="104" height="20" rx="4" />
              <rect x="352" y="276" width="70" height="20" rx="4" />
              <rect x="438" y="276" width="76" height="20" rx="4" />
            </g>
          </>
        )}

        {id === 'yCnn-NfSxIybUQ2iTuUGq' && (
          <>
            <text x="36" y="42" className="board-heading">互联网像快递网络：包裹被拆小，一站一站送到目标机器</text>
            {box(42, 130, 124, 64, '你的电脑', '192.168.x.x', 0)}
            {box(232, 82, 112, 58, '路由器 A', '下一站', 2)}
            {box(400, 160, 112, 58, '路由器 B', '再下一站', 2)}
            {box(584, 124, 128, 70, '服务器', 'IP + 端口', 1)}
            <path d="M168 154 C196 108, 210 108, 228 112" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M346 116 C382 126, 390 154, 396 174" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M514 190 C546 184, 560 158, 580 154" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <text x="382" y="284" textAnchor="middle" className="card-title">IP 找机器，端口找程序；TCP 像挂号信，UDP 像广播</text>
          </>
        )}

        {id === 'SiYUdtYMDImRPmV2_XPkH' && (
          <>
            <text x="36" y="42" className="board-heading">打开网站时，浏览器不是"魔法显示"，而是在跑一条真实链路</text>

            <g className={`internet-card address ${activeClass(0)}`} onClick={pick(0)}>
              <rect x="42" y="82" width="164" height="96" rx="18" />
              <rect x="62" y="104" width="124" height="22" rx="11" className="address-bar" />
              <text x="124" y="121" textAnchor="middle" className="mini-text">roadmap.sh</text>
              <text x="124" y="154" textAnchor="middle" className="card-title">输入网址</text>
            </g>

            <g className={`internet-card dns ${activeClass(1)}`} onClick={pick(1)}>
              <rect x="292" y="58" width="146" height="118" rx="16" />
              <path d="M316 78 H414 M316 104 H414 M316 130 H390" className="book-lines" />
              <text x="365" y="156" textAnchor="middle" className="card-title">DNS 通讯录</text>
              <text x="365" y="176" textAnchor="middle" className="mini-text">域名 → IP</text>
            </g>

            <g className={`internet-card server ${activeClass(3)}`} onClick={pick(3)}>
              <rect x="540" y="76" width="138" height="126" rx="18" />
              <text x="609" y="104" textAnchor="middle" className="card-title">服务器</text>
              <rect x="566" y="122" width="86" height="20" rx="6" />
              <rect x="566" y="152" width="86" height="20" rx="6" />
              <rect x="566" y="182" width="86" height="20" rx="6" />
              <circle cx="584" cy="132" r="4" />
              <circle cx="584" cy="162" r="4" />
              <circle cx="584" cy="192" r="4" />
              <text x="609" y="226" textAnchor="middle" className="mini-text">接请求、查数据、组织响应</text>
            </g>

            <g className={`internet-card browser ${activeClass(4)}`} onClick={pick(4)}>
              <rect x="514" y="262" width="176" height="62" rx="14" />
              <circle cx="534" cy="280" r="4" />
              <circle cx="550" cy="280" r="4" />
              <rect x="536" y="296" width="54" height="14" rx="4" />
              <rect x="604" y="296" width="58" height="14" rx="4" />
              <text x="602" y="348" textAnchor="middle" className="card-title">浏览器渲染</text>
            </g>

            <path d="M208 124 C242 90, 258 88, 288 104" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M438 118 C482 108, 506 112, 536 128" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M610 206 C610 228, 608 242, 606 258" className={`story-arrow ${activeClass(4)}`} markerEnd={`url(#chalk-arrow-${id})`} />

            <g className={`packet-road ${activeClass(2)}`} onClick={pick(2)}>
              <path d="M74 270 C154 246, 220 288, 292 268 S410 252, 486 274" />
              <rect x="188" y="260" width="34" height="22" rx="7" />
              <rect x="238" y="274" width="34" height="22" rx="7" />
              <rect x="288" y="254" width="34" height="22" rx="7" />
              <text x="280" y="330" textAnchor="middle" className="card-title">请求会拆成"小包裹"在网络里转运</text>
            </g>
          </>
        )}

        {id === 'oyg5g4-cY5EBEUgVkjnL3' && (
          <>
            <text x="36" y="42" className="board-heading">后端学前端，不是为了画页面，是为了看懂请求从哪里来</text>
            {box(44, 100, 136, 64, 'HTML 表单', '收集输入', 0)}
            {box(44, 220, 136, 64, 'CSS', '别让按钮消失', 1)}
            {box(306, 100, 136, 64, 'JS', 'fetch / axios', 2)}
            {box(574, 100, 136, 64, '后端 API', '接收参数', 3)}
            {box(306, 236, 136, 64, 'Network', '查真相', 3)}
            <path d="M182 132 H302" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M444 132 H570" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M374 166 V232" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}

        {id === 'aqMaEY8gkKMikiqleV5EP' && (
          <>
            <text x="36" y="42" className="board-heading">托管就是给不同东西找"房子"：文件放 CDN，代码放服务器</text>
            {box(42, 92, 150, 66, '静态资源', 'HTML/CSS/JS', 0)}
            {box(42, 218, 150, 66, '后端服务', '会运行代码', 1)}
            {box(318, 154, 140, 66, '域名 + HTTPS', '统一入口', 3)}
            {box(574, 92, 138, 66, '对象存储/CDN', '发文件', 0)}
            {box(574, 218, 138, 66, '服务器/容器', '跑接口', 1)}
            <path d="M194 124 C250 112, 276 142, 314 170" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M194 250 C250 248, 276 206, 314 190" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M460 170 C510 118, 528 118, 570 124" className={`story-arrow ${activeClass(0)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M460 190 C510 244, 528 244, 570 250" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}

        {id === 'NvUcSDWBhzJZ31nzT4UlE' && (
          <>
            <text x="36" y="42" className="board-heading">代码托管平台不只是放代码：它还负责协作、审查和自动验收</text>
            {box(42, 128, 124, 62, '本地 commit', '你的存档', 0)}
            {box(218, 128, 112, 62, 'push', '上传', 0)}
            {box(392, 78, 134, 62, 'PR / MR', '请求合并', 2)}
            {box(392, 218, 134, 62, 'CI', '机器验收', 4)}
            {box(600, 128, 112, 62, 'main', '主线', 3)}
            <path d="M168 158 H214" className={`story-arrow ${activeClass(0)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M332 150 C362 106, 372 106, 388 110" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M332 166 C362 240, 372 240, 388 250" className={`story-arrow ${activeClass(4)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M528 110 C564 118, 574 136, 596 150" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M528 250 C564 236, 574 180, 596 166" className={`story-arrow ${activeClass(4)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}
      </svg>
    </div>
  );
}

export function LearningLab({ tutorial, lesson }: { tutorial: Tutorial; lesson: DeepLesson }) {
  const [active, setActive] = useState(0);
  const teachingLesson = getTeachingLesson(tutorial.id);
  const displayLesson = teachingLesson ?? lesson;
  const activeIndex = Math.min(active, displayLesson.route.length - 1);
  const step = displayLesson.route[activeIndex];

  useEffect(() => {
    setActive(0);
  }, [tutorial.id]);

  if (teachingLesson) {
    return (
      <Space direction="vertical" size={18} className="drawer-section git-learning-page">
        <Card className="git-lesson-hero" size="small">
          <Tag color="blue">从零讲懂</Tag>
          <Title level={4}>{teachingLesson.heading}</Title>
          <Paragraph>{teachingLesson.scene}</Paragraph>
          <Alert type="info" showIcon title="一句话先记住" description={teachingLesson.core} />
        </Card>

        <Card className="git-metaphor-card" size="small" title="先用人话理解">
          <Paragraph>{teachingLesson.metaphor}</Paragraph>
        </Card>

        <FoundationBlackboard tutorial={tutorial} active={activeIndex} onPick={setActive} lesson={teachingLesson} />

        <div className="foundation-concepts git-lesson-steps" aria-label={`${tutorial.zh} 学习步骤`}>
          {teachingLesson.route.map((item, index) => (
            <button
              type="button"
              key={item.label}
              className={`foundation-chip ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActive(index)}
            >
              <span className="step-number">{index + 1}</span>
              <span className="step-label">{item.label}</span>
            </button>
          ))}
        </div>

        <Card className="git-teacher-card" title={step.title}>
          <Paragraph>{step.text}</Paragraph>
        </Card>

        <Flex gap={12} className="foundation-two-col">
          <Alert className="foundation-note" type="warning" showIcon title="容易误解的点" description={teachingLesson.mistake} />
          <Alert className="foundation-note" type="success" showIcon title="现在就动手" description={teachingLesson.experiment} />
        </Flex>
      </Space>
    );
  }

  return (
    <Space direction="vertical" size={16} className="drawer-section">
      <Card className="foundation-hero" size="small">
        <Tag color="blue">精讲</Tag>
        <Title level={4}>{tutorial.zh}</Title>
        <Paragraph>{lesson.scene}</Paragraph>
        <Alert type="info" showIcon title="先抓住这句话" description={lesson.core} />
      </Card>

      <FoundationBlackboard tutorial={tutorial} active={activeIndex} onPick={setActive} lesson={lesson} />

      <div className="foundation-concepts" aria-label={`${tutorial.zh} 概念点`}>
        {lesson.route.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className={`foundation-chip ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActive(index)}
          >
            <span className="step-number">{index + 1}</span>
            <span className="step-label">{item.label}</span>
          </button>
        ))}
      </div>

      <Card className="foundation-focus" title={step.title}>
        <Paragraph>{step.text}</Paragraph>
      </Card>

      <Flex gap={12} className="foundation-two-col">
        <Alert className="foundation-note" type="warning" showIcon title="容易混淆" description={lesson.confusion} />
        <Alert className="foundation-note" type="success" showIcon title="马上动手看见它" description={lesson.experiment} />
      </Flex>
    </Space>
  );
}