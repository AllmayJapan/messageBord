from pytrends.request import TrendReq
import json

# pytrendsの初期化
pytrends = TrendReq(hl='ja-JP', tz=540)

# トレンドのトピックを取得
trending_searches_df = pytrends.trending_searches(pn='japan')
trending_words = trending_searches_df[0].tolist()

# 結果をJSON形式で保存
with open('data/trending_words.json', 'w', encoding='utf-8') as f:
    json.dump(trending_words, f, ensure_ascii=False, indent=4)
