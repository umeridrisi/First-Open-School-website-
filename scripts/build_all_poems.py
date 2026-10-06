# -*- coding: utf-8 -*-
import json
import os

def write_ts_file(filepath, var_name, poems):
    content = 'import { Poem } from "../../types";\n\n'
    content += f'export const {var_name}: Poem[] = '
    content += json.dumps(poems, indent=2, ensure_ascii=False)
    content += ';\n'
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {len(poems)} poems to {filepath}")

# We will define each module and call write_ts_file
