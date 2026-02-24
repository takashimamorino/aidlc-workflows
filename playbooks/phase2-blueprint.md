# Phase 2: Blueprint プレイブック

> 要件をもとに、技術設計・UI設計・データモデル・チーム計画を策定する

## 前提条件

- Phase 1 が完了していること（aidlc-docs/aidlc-state.md で確認）
- `aidlc-docs/inception/intent.md`, `aidlc-docs/inception/requirements.md`, `aidlc-docs/inception/user-stories.md` が存在すること

---

## Step 1: Architecture（アーキテクチャ設計）

### AIの行動

1. **Phase 1 の成果物を読み込む**
   - intent.md、requirements.md、user-stories.md を読み込む
   - 機能要件・非機能要件・制約条件を把握する

2. **技術スタックを提案する**
   - 要件に適した技術スタックを2〜3パターン提案する
   - 各パターンのメリット・デメリットを提示する
   - 人間に確認: 「どのパターンが良いですか？または既に決まっている技術はありますか？」

3. **システム構成を設計する**
   - 選定した技術スタックに基づき全体構成図を作成する（Mermaid）
   - 主要なAPIエンドポイントの一覧を作成する
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
- `aidlc-docs/aidlc-state.md` の Step 1 チェックボックスを `[x]` にする

---

## Step 2: UI/UX Design（UI/UX設計）

### AIの行動

1. **ユーザーストーリーから画面を洗い出す**
   - user-stories.md を読み込み、必要な画面を特定する
   - 画面一覧を作成し、各画面の概要を記述する

2. **画面遷移フローを設計する**
   - 画面間の遷移を Mermaid で図示する
   - 主要なユーザーフローが自然に実現できるか確認する

3. **各画面のレイアウトを設計する**
   - ASCII アートでワイヤーフレームを作成する
   - 主要な要素とインタラクションを記述する
   - 人間に確認: 「この画面構成でイメージと合っていますか？」

### 成果物の生成

- `aidlc-docs/blueprint/ui-design.md` を生成する
- テンプレート: `templates/blueprint/ui-design.md` を使用

### 記録

- `aidlc-docs/log.md` に対話サマリーを記録する

### 完了条件

- `aidlc-docs/blueprint/ui-design.md` が生成され、人間が確認した
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

## Step 4: Team Plan（チーム・並列設計）

### AIの行動

1. **チーム構成を確認する**
   - 人間に質問: 「開発メンバーは何人ですか？それぞれの得意領域はありますか？」
   - メンバー一覧と担当領域を整理する

2. **並列ストリームを設計する**
   - architecture.md と data-model.md を分析し、独立して進められる作業を特定する
   - メンバー数に応じて並列ストリームを設計する
   - 各ストリームの依存関係を明確にする

3. **タスク分割方針を定義する**
   - Construction フェーズでのタスクの切り方の基本方針を決める
   - ストリーム間の統合ポイントを特定する
   - 人間に確認: 「この分担で進めてよいですか？」

4. **タイムライン概要を作成する**（任意）
   - Mermaid のガントチャートで大まかなタイムラインを示す

### 成果物の生成

- `aidlc-docs/blueprint/team-plan.md` を生成する
- テンプレート: `templates/blueprint/team-plan.md` を使用

### 記録

- `aidlc-docs/log.md` に対話サマリーを記録する

### 完了条件

- `aidlc-docs/blueprint/team-plan.md` が生成され、人間が確認した
- `aidlc-docs/aidlc-state.md` の Step 4 チェックボックスを `[x]` にする

---

## Step 5: Approval Gate（承認）

### AIの行動

1. **Blueprint 全体を要約して提示する**
   - 4つの成果物の要点をまとめて提示する:
     - 技術スタックと構成
     - 画面数と主要フロー
     - エンティティ数とリレーション
     - チーム分担と並列ストリーム
   - 「以上が Phase 2 の成果物です。承認いただけますか？」と確認する

2. **人間の判断を受ける**
   - **承認**: Phase 3 に進む
   - **フィードバックあり**: 指摘された箇所を修正し、再度確認する

### 記録

- `aidlc-docs/log.md` に承認結果を記録する

### 完了条件

- 人間が承認した
- `aidlc-docs/aidlc-state.md` の Step 5 チェックボックスを `[x]` にする
- `aidlc-docs/aidlc-state.md` の `Current Phase` を `Phase 3 - Prototype` に更新する
