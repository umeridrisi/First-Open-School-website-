# -*- coding: utf-8 -*-
"""
Generates the complete 132-poem dataset for First Open School.
28 original poems + 104 brand-new poems and folk rhymes from around the world.
Organized into 7 modular category files under src/data/poems/
and unified in src/data/poemsData.ts
"""
import os
import json

os.makedirs("src/data/poems", exist_ok=True)
print("Building 132-poem international curriculum...")
