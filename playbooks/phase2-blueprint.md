# Phase 2: Blueprint プレイブック

> 要件をもとに、UI設計・技術設計・データモデルを策定する

## 前提条件

- Phase 1 が完了していること（aidlc-docs/aidlc-state.md で確認）
- `aidlc-docs/inception/intent.md`, `aidlc-docs/inception/requirements.md`, `aidlc-docs/inception/user-stories.md` が存在すること

## フェーズ開始時の成果物読み込み

Phase 2 の各ステップに入る前に、以下の成果物を一括で読み込む:

- `aidlc-docs/inception/intent.md`
- `aidlc-docs/inception/requirements.md`
- `aidlc-docs/inception/user-stories.md`

---

## Step 1: UI Design（UI設計 — ラフレベル）

> **スコープ**: 画面一覧・画面遷移フロー・各画面の概要（何をする画面か）をラフレベルで定義する。
> レイアウト詳細・コンポーネント構成・表示データ・インタラクションは Phase 3 で確定する。

### AIの行動

1. **Phase 1 の成果物を読み込む**
   - intent.md、requirements.md、user-stories.md を読み込む
   - 機能要件・ユーザーフローを把握する

2. **ユーザーストーリーから画面を洗い出す**
   - user-stories.md を読み込み、必要な画面を特定する
   - 画面一覧を作成し、各画面の概要（目的・対応ユーザーストーリー）を記述する

3. **画面遷移フローを設計する**
   - 画面間の遷移を Mermaid で図示する
   - 主要なユーザーフローが自然に実現できるか確認する

4. **各画面の概要を記述する**
   - 各画面の目的と主な役割を簡潔に記述する
   - 画面に含まれる主要エリア（ヘッダー、入力、一覧など）を箇条書きで示す
   - ※ 詳細なレイアウト（ASCII ワイヤーフレーム）やインタラクション定義は Phase 3 で行う
   - 人間に確認: 「この画面構成でイメージと合っていますか？」

### 成果物の生成

- `aidlc-docs/blueprint/ui-design.md` を生成する
- テンプレート: `templates/blueprint/ui-design.md` を使用

### 記録

- `aidlc-docs/log.md` に対話サマリーを記録する

### 完了条件

- `aidlc-docs/blueprint/ui-design.md` が生成され、人間が確認した
- `aidlc-docs/aidlc-state.md` の Step 1 チェックボックスを `[x]` にする

---

## Step 2: Architecture（アーキテクチャ設計）

### AIの行動

1. **UI設計の結果を踏まえて技術要件を整理する**
   - ui-design.md の画面数・遷移パターンを把握する
   - 画面構成から必要な技術要素を特定する（ルーティング、状態管理等）

2. **技術スタックを提案する**
   - 要件とUI構成に適した技術スタックを2〜3パターン提案する
   - 各パターンのメリット・デメリットを提示する
   - 人間に確認: 「どのパターンが良いですか？または既に決まっている技術はありますか？」

3. **システム構成を設計する**
   - 選定した技術スタックに基づき全体構成図を作成する（Mermaid）
   - サーバーがある場合: 主要なAPIエンドポイントの一覧を作成する
   - クライアントのみの場合: データアクセスパターンを記述する
   - ディレクトリ構成を設計する

4. **技術的な意思決定を記録する**
   - 重要な技術選定について、選択肢・比較・決定理由を記録する

### 成果物の生成

- `aidlc-docs/blueprint/architecture.md` を生成する
- テンプレート: `templates/blueprint/architecture.md` を使用

### 記録

- `aidlc-docs/log.md` に対話サマリーを記録する

### 完了条件

- `aidlc-docs/blueprint/architecture.md` が生成され、人間が確認した
- `aidlc-docs/aidlc-state.md` の Step 2 チェックボックスを `[x]` にする

---

## Step 3: Data Model（データモデル設計）

### AIの行動

1. **要件と画面設計からエンティティを抽出する**
   - requirements.md と ui-design.md を読み込む
   - 必要なエンティティを特定し一覧化する

2. **各エンティティの属性を定義する**
   - 属性名、型、必須/任意、説明を記述する
   - エンティティ間のリレーションを定義する

3. **ER図を作成する**
   - Mermaid でER図を作成する
   - 人間に確認: 「このデータモデルで問題はありますか？」

4. **API ↔ データモデルのマッピングを作成する**
   - architecture.md のAPIエンドポイントと、各エンティティの対応を記述する

### 成果物の生成

- `aidlc-docs/blueprint/data-model.md` を生成する
- テンプレート: `templates/blueprint/data-model.md` を使用

### 記録

- `aidlc-docs/log.md` に対話サマリーを記録する

### 完了条件

- `aidlc-docs/blueprint/data-model.md` が生成され、人間が確認した
- `aidlc-docs/aidlc-state.md` の Step 3 チェックボックスを `[x]` にする

---

## Step 4: Approval Gate（承認）

> **承認ゲート**: 中間ステップの「確認」と異なり、フェーズ全体の成果物を判断する。承認されれば次フェーズへ進む。

### AIの行動

1. **Blueprint 全体を要約して提示する**
   - 3つの成果物の要点をまとめて提示する:
     - 画面数と主要フロー
     - 技術スタックと構成
     - エンティティ数とリレーション
   - 「以上が Phase 2 の成果物です。承認いただけますか？」と問う

2. **人間の判断を受ける**
   - **承認**: Phase 3 に進む
   - **フィードバックあり**: 指摘された箇所を修正し、再度承認を求める

### 記録

- `aidlc-docs/log.md` に承認結果を記録する

### 完了条件

- 人間が承認した
- `aidlc-docs/aidlc-state.md` の Step 4 チェックボックスを `[x]` にする
- `aidlc-docs/aidlc-state.md` の `Current Phase` を `Phase 3 - Prototype` に更新する
