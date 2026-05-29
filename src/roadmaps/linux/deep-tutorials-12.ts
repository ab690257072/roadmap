import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_12: Record<string, DeepTutorial> = {
  "sKduFaX6xZaUUBdXRMKCL": {
    mentalModel: 'unexpand 是 expand 的反操作——把空格转回 Tab。当文件需要减小体积或恢复 Tab 缩进时使用。',
    handsOn: [
      { title: '空格转 Tab', cmd: 'printf "    hello\\n        world\\n" | unexpand -t 4', output: '\thello\n\t\tworld', explain: '-t 4 表示每 4 个连续空格转成一个 Tab。默认 Tab 宽度是 8。' },
      { title: '只转行首空格', cmd: 'printf "    hello    world\\n" | unexpand -t 4', output: '\thello\tworld', explain: '默认 unexpand 转换所有位置的空格。如果只想转换行首（缩进），需要配合其他工具。' },
      { title: '验证转换', cmd: 'printf "    hello\\n" | unexpand -t 4 | cat -A', output: '^Ihello$', explain: 'cat -A 显示 Tab 为 ^I。转换前是 4 个空格，转换后是 ^I（Tab）。' },
      { title: '搭配 expand', cmd: 'printf "\\thello\\n" | expand -t 4 | unexpand -t 4 | cat -A', output: '^Ihello$', explain: 'expand 和 unexpand 互逆。理论上 expand file | unexpand 恢复原样。但如果原始文件混用了 Tab 和空格，结果可能不完全一致。' },
    ],
    diagnosis: [
      { symptom: 'unexpand 没转换所有空格', cause: '空格数量不是 Tab 宽度的整数倍。比如 Tab 宽度 4，但只有 3 个连续空格。', fix: 'unexpand 只在空格数量恰好是 Tab 宽度整数倍时才转换。3 个空格不会被转成 Tab。' },
      { symptom: 'unexpand 和 expand 结果不一致', cause: '原始文件混用了 Tab 和空格。expand 把所有 Tab 转成空格，unexpand 再把空格转回 Tab 时可能和原来不同。', fix: '统一缩进风格：要么全用 Tab，要么全用空格。用 .editorconfig 强制规范。' },
    ],
    exercises: [
      { level: '基础', task: '把一个用 4 空格缩进的文件转成 Tab 缩进', hint: 'unexpand -t 4', answer: 'unexpand -t 4 file_spaces.txt > file_tabs.txt\n\n# 验证：\nhead -5 file_spaces.txt | cat -A\nhead -5 file_tabs.txt | cat -A' },
      { level: '进阶', task: '写一个脚本，把目录下所有 .js 文件的 2 空格缩进转成 Tab', hint: 'find + unexpand -t 2', answer: '#!/bin/bash\nfind . -name "*.js" | while read f; do\n  unexpand -t 2 "$f" > "$f.tmp"\n  mv "$f.tmp" "$f"\n  echo "已转换: $f"\ndone' },
      { level: '挑战', task: '写一个函数，检测文件的缩进类型（Tab 还是空格，宽度多少），然后统一转换成指定类型', hint: '结合 detect-indent（前面的挑战题）和 expand/unexpand', answer: 'convert-indent() {\n  local file=$1\n  local target=${2:-space}  # space 或 tab\n  local width=${3:-4}\n  \n  # 检测当前缩进（简化版）\n  local has_tab=$(grep -c "^\\t" "$file" 2>/dev/null || echo 0)\n  local has_space=$(grep -c "^  " "$file" 2>/dev/null || echo 0)\n  \n  if [ "$target" = "space" ]; then\n    if [ "$has_tab" -gt 0 ]; then\n      expand -t "$width" "$file" > "$file.tmp"\n      mv "$file.tmp" "$file"\n      echo "已转换: Tab → $width 空格"\n    fi\n  elif [ "$target" = "tab" ]; then\n    if [ "$has_space" -gt 0 ]; then\n      unexpand -t "$width" "$file" > "$file.tmp"\n      mv "$file.tmp" "$file"\n      echo "已转换: 空格 → Tab"\n    fi\n  fi\n}' },
    ],
    prereqs: ['expand — Tab 转空格'],
    nextSteps: ['.editorconfig — 统一项目缩进风格', 'prettier/eslint — 自动格式化代码'],
  },
};
