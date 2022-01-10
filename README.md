# ScoreSaberの各種ランキング (Various ScoreSaber rankings)
※1日1回更新されます Updated once a day.
### [Total Play Count Global Ranking](total_play_count_global_rank.md)
### [Total Play Count Japan Ranking](total_play_count_jp_rank.md)
### [Ranked Play Count Global Ranking](ranked_play_count_global_rank.md)
### [Ranked Play Count Japan Ranking](ranked_play_count_jp_rank.md)
### [Weekly Change Global Ranking](weekly_change_global_rank.md)
### [Weekly Change Japan Ranking](weekly_change_jp_rank.md)
### [Total Score Global Ranking](total_score_global_rank.md)
### [Total Score Japan Ranking](total_score_jp_rank.md)
### [Total Ranked Score Global Ranking](total_ranked_score_global_rank.md)
### [Total Ranked Score Japan Ranking](total_ranked_score_jp_rank.md)
### [Average Ranked Accuracy Global Ranking](average_ranked_accuracy_global_rank.md)
### [Average Ranked Accuracy Japan Ranking](average_ranked_accuracy_jp_rank.md)
### [Replays Watched Global Ranking](replays_watched_global_rank.md)
### [Replays Watched Japan Ranking](replays_watched_jp_rank.md)

※2023/6/4:重くてMarkdownが展開されないので上位500人に減らしました。

## 各種グラフ (Various Graphs)
### [上位20000人国別人数グラフ (Graph of the number of people in ScoreSaber's top 2000 by country)](https://rynan4818.github.io/ScoreSaberRanking/ss_data_get3.html)
### [ScoreSaberの各種データのグラフ・テーブル表示](https://beatsaber.rynan.com/scoresaber/)
# JSON Data

上記ランキングデータをJSON形式でも取得可能です。上の表は各ランキング500位までですがJSONは20,000ユーザ分あります

JSONデータはアプリケーションでの利用を想定しているため、ScoreSaberのUserIDからランキングデータを検索しやすい形式になっています

まず最初にScoreSaber UserIDから、その取得済みランキングデータが保存されているランキングデータファイル名とランキングデータ(UserData)配列のインデックスを示した`scoresaber_rank_index.json`を取得して下さい。
### 検索用JSON URL
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_index.json

### 検索用JSON サンプル
```JSON
{
    "UpdateTime": 1664022601,              #ランキングデータの更新時刻(UNIX Time)
    "WeeklyChangeValueTime": 1663385401,   #WeeklyChangeValueの対象時刻(UNIX Time)
    "NextUpdateTime": 1664119801,          #次回ランキングデータの更新予定時刻(UNIX Time)
    "RankingDataFile": [                   #各ランキングデータファイル名の配列
        "scoresaber_rank_1_2000.json",
        "scoresaber_rank_2001_4000.json",
        "scoresaber_rank_4001_6000.json",
        "scoresaber_rank_6001_8000.json",
        "scoresaber_rank_8001_10000.json",
        "scoresaber_rank_10001_12000.json",
        "scoresaber_rank_12001_14000.json",
        "scoresaber_rank_14001_16000.json",
        "scoresaber_rank_16001_18000.json",
        "scoresaber_rank_18001_20000.json"
    ],
    "UserIndexData": {                     #ScoreSaber UserIDから、RankingDataFile配列のインデックスと、UserData配列のインデックスを求めるデータ
        "76561198333869741": [             #ScoreSaber UserID
            0,                             #RankingDataFile配列のインデックス
            0                              #UserData配列のインデックス
        ],
        "76561199104169308": [
            0,
            1
        ],
        #20000人分続きます・・・・
    }
}
```

次に該当のランキングファイルを取得して、UserData配列のインデックスから該当ユーザのランキングデータを取得します。

ランキングファイルはppのグローバルランキング順に並んでいて、2000人づつ分かれています。

ランキングデータの各データ配列は`Column`と同じ並びの配列になっていますので、Column配列からインデックスを取得してUserData配列から取得して下さい。

#### 例: RubyでTotalPlayCountRankの列をUserDataから取得
```Ruby
  userData[column.index("TotalPlayCountRank")]
```
### ランキングデータJSON URL
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_1_2000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_2001_4000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_4001_6000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_6001_8000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_8001_10000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_10001_12000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_12001_14000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_14001_16000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_16001_18000.json
- https://rynan4818.github.io/ScoreSaberRanking/json/scoresaber_rank_18001_20000.json

### ランキングデータJSON サンプル
```JSON
{
    "Column": [                 #カラム名の一覧
        "StartTime",            #ユーザーデータの取得開始時刻(UNIX Time)
        "GetTime",              #現在のユーザデータを取得した時刻(UNIX Time)
        "Rank",                 #↓ScoreSaberAPIのPlayerCollection取得データ
        "UserID",
        "Player",
        "Country",
        "pp",
        "WeeklyChange",
        "CountryRank",
        "Role",
        "Permissions",
        "TotalScore",
        "TotalRankedScore",
        "AverageRankedAccuracy",
        "TotalPlayCount",
        "RankedPlayCount",
        "ReplaysWatched",
        "TotalScoreRank",                          #↓各種ランキングデータ
        "TotalScoreRankNextUser",                  #NextUserは一つ上のランクのScoreSaber UserIDです。各データはScoreSaber APIから取得するか、検索用JSONから取得して下さい。
        "TotalScoreLocalRank",
        "TotalScoreLocalRankNextUser",
        "TotalScoreWeeklyChangeValue",
        "TotalScoreMonthlyChangeValue",
        "TotalRankedScoreRank",
        "TotalRankedScoreRankNextUser",
        "TotalRankedScoreLocalRank",
        "TotalRankedScoreLocalRankNextUser",
        "TotalRankedScoreWeeklyChangeValue",
        "TotalRankedScoreMonthlyChangeValue",
        "AverageRankedAccuracyRank",
        "AverageRankedAccuracyRankNextUser",
        "AverageRankedAccuracyLocalRank",
        "AverageRankedAccuracyLocalRankNextUser",
        "AverageRankedAccuracyWeeklyChangeValue",
        "AverageRankedAccuracyMonthlyChangeValue",
        "TotalPlayCountRank",
        "TotalPlayCountRankNextUser",
        "TotalPlayCountLocalRank",
        "TotalPlayCountLocalRankNextUser",
        "TotalPlayCountWeeklyChangeValue",
        "TotalPlayCountMonthlyChangeValue",
        "RankedPlayCountRank",
        "RankedPlayCountRankNextUser",
        "RankedPlayCountLocalRank",
        "RankedPlayCountLocalRankNextUser",
        "RankedPlayCountWeeklyChangeValue",
        "RankedPlayCountMonthlyChangeValue",
        "ReplaysWatchedRank",
        "ReplaysWatchedRankNextUser",
        "ReplaysWatchedLocalRank",
        "ReplaysWatchedLocalRankNextUser",
        "ReplaysWatchedWeeklyChangeValue",
        "ReplaysWatchedMonthlyChangeValue",
        "WeeklyChangeRank",
        "WeeklyChangeRankNextUser",
        "WeeklyChangeLocalRank",
        "WeeklyChangeLocalRankNextUser",
        "WeeklyChangeWeeklyChangeValue",
        "WeeklyChangeMonthlyChangeValue"
    ],
    "UserData": [                     #ランキングデータの配列（調べたインデックスを使って取得する)
        [                             #各ユーザのデータ（並びはColumnと同一)
            1667618925,
            1667618926,
            2,
            76561198333869741,
            "cerret",
            "us",
            1781146,
            -1,
            1,
            "Supporter",
            192,
            4793117276,
            1282384317,
            95623,
            3472,
            861,
            25488,
            52,
            76561199029433311,
            13,
            76561198023999436,
            3017501,
            25137180,
            203,
            76561197964053684,
            40,
            76561198426793016,
            3017191,
            14519653,
            125,
            76561198089913211,
            38,
            76561198052914112,
            1,
            19,
            284,
            76561198818187344,
            79,
            76561198375965509,
            1,
            15,
            750,
            76561198361466394,
            162,
            76561198119106832,
            1,
            7,
            2,
            2429129807113296,
            1,
            null,                 #ランク1位の人はNextUserがいないのでnullになります
            169,
            893,
            18555,
            76561198148072909,
            7416,
            76561198125088955,
            -1,
            -1
        ],
        #2000人分続きます・・・・
    ]
}
```

## [ScoreSaberランキング履歴データ取得API](ss_data_get.md)

[ScoreSaberの各種データのグラフ・テーブル表示](https://beatsaber.rynan.com/scoresaber/)用のJSONデータ取得API解説です
