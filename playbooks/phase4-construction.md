# Phase 4: Construction プレイブック

> 設計成果物をプロダクションコードに変換する。AI agent が完全自律で実装し、人間はコードを書かない。

## 前提条件

- Phase 3 が完了していること（aidlc-docs/aidlc-state.md で確認）
- プロトタイプが承認され、UI設計が確定していること
- `aidlc-docs/` 配下の全成果物が存在すること

## フェーズ開始時の成果物読み込み

Phase 4 の各ステップに入る前に、以下の成果物を一括で読み込む:

- `aidlc-docs/inception/intent.md`
- `aidlc-docs/inception/requirements.md`
- `aidlc-docs/inception/user-stories.md`
- `aidlc-docs/blueprint/ui-design.md`
- `aidlc-docs/prototype/design.md`

## プロトタイプの扱い

- プロトタイプのコード（`aidlc-docs/prototype/` 配下）は **UI・動作の参照としてのみ** 使用する
- プロダクションコードはゼロから構築する
- プロトタイプのコードをコピーしたりリファクタリングして使ったりしない

---

## Step 1: Architecture（アーキテクチャ設計）

> プロトタイプで検証した結果を踏まえて、プロダクション用のアーキテクチャを設計する。

### AIの行動

1. **プロトタイプの結果を踏まえて技術要件を整理する**
   - prototype/design.md の確定済み UI 設計を把握する
   - ui-design.md の画面数・遷移パターンを把握する
   - requirements.md の非機能要件（パフォーマンス、セキュリティ、対応環境等）を把握する
   - プロトタイプ実装で得られた技術的知見を考慮する

2. **技術スタックを提案する**
   - 要件・UI構成に適した技術スタックを2〜3パターン提案する
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

- `aidlc-docs/construction/architecture.md` を生成する
- テンプレート: `templates/construction/architecture.md` を使用

### 記録

- `aidlc-docs/log.md` に対話サマリーを記録する

### 完了条件

- `aidlc-docs/construction/architecture.md` が生成され、人間が確認した
- `aidlc-docs/aidlc-state.md` の Step 1 チェックボックスを `[x]` にする

---

## Step 2: Data Model（データモデル設計）

> Architecture で決定した技術スタックを踏まえ、プロダクション用のデータモデルを設計する。

### AIの行動

1. **要件と画面設計からエンティティを抽出する**
   - requirements.md、ui-design.md、prototype/design.md を読み込む
   - 必要なエンティティを特定し一覧化する

2. **各エンティティの属性を定義する**
   - 属性名、型、必須/任意、説明を記述する
   - エンティティ間のリレーションを定義する

3. **ER図を作成する**
   - Mermaid でER図を作成する
   - 人間に確認: 「このデータモデルで問題はありますか？」

4. **API ↔ データモデルのマッピングを作成する**
   - construction/architecture.md のAPIエンドポイントと、各エンティティの対応を記述する

### 成果物の生成

- `aidlc-docs/construction/data-model.md` を生成する
- テンプレート: `templates/construction/data-model.md` を使用

### 記録

- `aidlc-docs/log.md` に対話サマリーを記録する

### 完了条件

- `aidlc-docs/construction/data-model.md` が生成され、人間が確認した
- `aidlc-docs/aidlc-state.md` の Step 2 チェックボックスを `[x]` にする

---

## Step 3: Implementation（実装）

> **プロダクション品質の原則**: Phase 3 の「速度優先」とは逆に、保守性・堅牢性を重視する。
> - 適切な型定義・型安全性を確保する
> - エラーハンドリングを適切に実装する
> - ハードコードを避け、設定値を外出しする
> - コードの重複を排除し、再利用可能な設計にする
> - テストを書く（受入基準をカバー）

### AIの行動

1. **プロジェクトをセットアップする**
   - construction/architecture.md に従い、プロダクション用プロジェクトを新規作成する
   - ディレクトリ構成を architecture.md どおりに構築する
   - 依存パッケージをインストールする

2. **全機能を一括実装する**
   - user-stories.md の受入基準、prototype/design.md の UI 設計を満たすように実装する
   - プロダクション品質のコードを書く
   - 受入基準を満たすテストを書く
   - テストを実行し、パスすることを確認する
   - construction/architecture.md の技術選定・構成パターンに従う
   - construction/data-model.md のエンティティ定義に従う
   - prototype/design.md の UI 設計（レイアウト・コンポーネント・インタラクション）に忠実に実装する

3. **全体の統合・検証を行う**
   - 全テストを実行し、パスすることを確認する
   - アプリケーションが起動し動作することを確認する
   - 主要なユーザーフローが動作することを確認する
   - 問題があればその場で修正する

### 成果物の生成

- プロダクションコード（architecture.md で定義されたプロジェクトディレクトリに生成）
- テストコード

### 記録

- `aidlc-docs/log.md` に実装サマリーを記録する
- テスト結果、動作確認の結果を記録する

### 完了条件

- 全機能が実装された
- 全テストがパスしている
- アプリケーションが動作する状態になった
- `aidlc-docs/aidlc-state.md` の Step 3 チェックボックスを `[x]` にする

---

## Step 4: Approval Gate（承認）

> **承認ゲート**: 実装結果を人間がレビューし、承認する。

### AIの行動

1. **実装結果を提示する**
   - アプリケーションの起動方法を伝える
   - 実装サマリーを提示する:
     - 実装した機能の概要
     - user-stories.md の受入基準の充足状況
     - テスト結果（パス率・カバレッジ）
   - 「実装結果をレビューしてください。フィードバックをお聞かせください」と伝える

2. **フィードバックに基づき次のアクションを決定する**

   | フィードバック内容 | アクション |
   |-------------------|-----------|
   | そもそも方向性が違う | Phase 1 (Inception) に戻る。intent.md を修正 |
   | 画面構成・フローを変えたい | Phase 2 (Blueprint) に戻る。UI Design を修正 |
   | UI詳細を変えたい | Phase 3 (Prototype) に戻る。UI設計を修正 |
   | アーキテクチャを変えたい | Step 1 に戻る。architecture.md を修正 |
   | データモデルを変えたい | Step 2 に戻る。data-model.md を修正 |
   | 実装の修正が必要 | Step 3 に戻り、指摘箇所を修正して再レビュー |
   | これでOK | Phase 5 (Quality Gate) に進む |

3. **戻る場合のルール**
   - `aidlc-docs/log.md` にフィードバックの理由と戻り先を記録する
   - `aidlc-docs/aidlc-state.md` の `Current Phase` を戻り先に更新する
   - 戻り先のフェーズのチェックボックスは、修正が必要なステップのみ `[ ]` に戻す
   - 修正完了後、再度このステップに戻ってくる

### 記録

- `aidlc-docs/log.md` にフィードバック内容と決定事項を記録する

### 完了条件

- 人間が実装結果を承認した
- `aidlc-docs/aidlc-state.md` の Step 4 チェックボックスを `[x]` にする
- `aidlc-docs/aidlc-state.md` の `Current Phase` を `Phase 5 - Quality Gate` に更新する
