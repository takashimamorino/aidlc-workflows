# Phase 1: Inception プレイブック

> 人間の漠然としたアイデアを、実行可能な要件に変換する

## 前提条件

- `aidlc-docs/aidlc-state.md` が存在すること
- `aidlc-docs/log.md` が存在すること

---

## Step 1: Intent（意図の表明）

### AIの行動

1. **対話を開始する**
   - 人間に「何を作りたいですか？自由に話してください」と問いかける
   - 人間が語った内容に対して、以下の観点で深掘り質問をする:
     - **Why**: なぜそれを作りたいのか？どんな問題を解決するのか？
     - **Who**: 誰のためのものか？ターゲットユーザーは？
     - **What**: 具体的にどんなことができるべきか？
     - **How much**: 成功をどう測るか？KPIは？

2. **仮説を提示して確認する**
   - 人間の回答をもとに、AIが仮説を立てて提示する
   - 「こういう理解で合っていますか？」と確認する
   - 曖昧な部分は選択肢を提示して人間に選ばせる

3. **制約・前提条件を聞く**
   - 技術的制約（既存システムとの統合など）
   - ビジネス上の制約（期限、予算など）
   - チーム・リソースの制約

### 対話のルール

- AIは質問攻めにしない。3問以内に収め、人間の負担を減らす
- AIは常に「こう理解しました」と要約してから次に進む
- 人間が曖昧な場合、AIが仮の答えを提案し「これでよいですか？」と聞く

### 成果物の生成

- 対話が十分に行われたら `aidlc-docs/inception/intent.md` を生成する
- テンプレート: `templates/inception/intent.md` を使用
- 生成後、人間に内容を確認してもらう

### 記録

- `aidlc-docs/log.md` の Phase 1 > Step 1 に対話サマリーを記録する
- 決定事項と生成した成果物を記録する

### 完了条件

- `aidlc-docs/inception/intent.md` が生成され、人間が内容を確認した
- `aidlc-docs/aidlc-state.md` の Step 1 チェックボックスを `[x]` にする

---

## Step 2: Requirements（要件の具体化）

### AIの行動

1. **intent.md を読み込む**
   - Step 1 で生成した `aidlc-docs/inception/intent.md` を読み込む

2. **機能要件を洗い出す**
   - Intent から必要な機能を抽出し一覧化する
   - 各機能に優先度を付ける（Must / Should / Could）
   - 人間に確認: 「この機能一覧で過不足はありますか？」

3. **MVPスコープを定義する**
   - Must の機能を中心にMVPスコープを提案する
   - やること / やらないこと / 将来やるかもしれないこと を明確に分ける
   - 人間に確認: 「MVPとしてはこの範囲でよいですか？」
   - スコープが広がりすぎたら「MVPとしてはここまでにしませんか？」と提案する

4. **非機能要件を定義する**
   - パフォーマンス、セキュリティ、アクセシビリティ、対応環境を確認する
   - 人間に確認が必要なものだけ聞く。明らかなものはAIが埋める

5. **ユーザーストーリーを生成する**
   - 機能要件をユーザーストーリー形式に変換する
   - 各ストーリーに Acceptance Criteria を付ける
   - 人間に確認: 「このユーザーストーリーで漏れはありますか？」

### 成果物の生成

- `aidlc-docs/inception/requirements.md` を生成する
- `aidlc-docs/inception/user-stories.md` を生成する
- テンプレート: `templates/inception/` を使用

### 記録

- `aidlc-docs/log.md` の Phase 1 > Step 2 に対話サマリーを記録する

### 完了条件

- `aidlc-docs/inception/requirements.md` と `aidlc-docs/inception/user-stories.md` が生成された
- 人間が内容を確認した
- `aidlc-docs/aidlc-state.md` の Step 2 チェックボックスを `[x]` にする

---

## Step 3: Approval Gate（承認）

> **承認ゲート**: 中間ステップの「確認」と異なり、フェーズ全体の成果物を判断する。承認されれば次フェーズへ進む。

### AIの行動

1. **全成果物を要約して提示する**
   - intent.md、requirements.md、user-stories.md の要点をまとめて提示する
   - 「以上が Phase 1 の成果物です。承認いただけますか？」と問う

2. **人間の判断を受ける**
   - **承認**: Phase 2 に進む
   - **フィードバックあり**: 指摘された箇所を修正し、再度承認を求める

### 記録

- `aidlc-docs/log.md` の Phase 1 > Step 3 に承認結果を記録する

### 完了条件

- 人間が承認した
- `aidlc-docs/aidlc-state.md` の Step 3 チェックボックスを `[x]` にする
- `aidlc-docs/aidlc-state.md` の `Current Phase` を `Phase 2 - Blueprint` に更新する
