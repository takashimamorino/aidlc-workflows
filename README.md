# AI-DLC Workflows

AI-Driven Development Lifecycle - AIが駆動し、人間が舵を取る開発ワークフロー。

Claude Code プラグインとして、6フェーズの構造化された開発プロセスを提供します。

## クイックスタート

### 1. プラグインのインストール

Claude Code の設定ファイル（`~/.claude/settings.json` または `.claude/settings.json`）に追加:

```json
{
  "plugins": {
    "marketplaces": [
      "https://github.com/takashima/aidlc-workflows"
    ]
  }
}
```

### 2. プロジェクトのセットアップ

```
/aidlc:setup
```

プロジェクトに `aidlc-docs/` ディレクトリが作成され、全フェーズのテンプレートがコピーされます。

### 3. 開発を開始

```
/aidlc:inception
```

## コマンド一覧

| コマンド | 説明 |
|---|---|
| `/aidlc:setup` | プロジェクトのセットアップ（テンプレートのコピー） |
| `/aidlc:status` | 進捗状況の確認・次のアクション提案 |
| `/aidlc:inception` | Phase 1: 構想（Intent → Exploration → Requirements → Approval） |
| `/aidlc:blueprint` | Phase 2: UI設計（画面一覧・遷移フロー・画面概要） |
| `/aidlc:prototype` | Phase 3: 検証（UI確定 → プロトタイプ構築 → フィードバック） |
| `/aidlc:construction` | Phase 4: 実装（Architecture → Data Model → Implementation → Approval） |
| `/aidlc:quality-gate` | Phase 5: 品質関門（品質チェック・自動修正 → Go/No-Go） |

## 使い方

### 基本的な流れ

1. `/aidlc:setup` でプロジェクトをセットアップ
2. `/aidlc:inception` から順にフェーズを進める
3. 各フェーズの Approval Gate で人間が承認すると次のフェーズへ
4. `/aidlc:status` でいつでも現在の進捗を確認できる

### Phase 1: Inception（構想）

```
/aidlc:inception
```

「何を作りたいか」を対話で深掘りし、要件を固めるフェーズ。

- **Step 1 — Intent**: AIが質問しながら課題・ビジョン・制約を整理する。XY問題の検出や Why の深掘りを行い、`intent.md` を生成する
- **Step 1.5 — Exploration**: 「どんな機能があるとよいか」をAIと一緒にアイデア発散する
- **Step 2 — Requirements**: 機能要件・MVP スコープ・ユーザーストーリーを生成する。暗黙の要件チェック（認証・エラー処理等）や異常系の洗い出しも行う
- **Step 3 — Approval Gate**: 成果物を確認し、承認すると Phase 2 へ

### Phase 2: Blueprint（UI設計）

```
/aidlc:blueprint
```

画面構成とユーザーフローをラフレベルで設計するフェーズ。

- **Step 1 — UI Design**: 画面一覧・画面遷移フロー（Mermaid）・各画面の概要を作成する。レイアウト詳細は Phase 3 で行う
- **Step 2 — Approval Gate**: 承認すると Phase 3 へ

### Phase 3: Prototype（検証）

```
/aidlc:prototype
```

UI設計を実装レベルに確定させ、動作するプロトタイプで検証するフェーズ。

- **Step 1 — Prototype Design**: ラフ UI を ASCII ワイヤーフレーム付きの実装レベルに詳細化する。エンティティ・モックデータ・技術スタックも決定する
- **Step 2 — Rapid Build**: サブエージェント（`prototype-builder`）がプロトタイプを高速構築する。速度優先だがUI設計には忠実
- **Step 3 — Review & Feedback**: プロトタイプを触ってフィードバック。OKなら Phase 4 へ、修正が必要なら適切なステップ・フェーズに差し戻し

### Phase 4: Construction（実装）

```
/aidlc:construction
```

プロダクションコードをゼロから構築するフェーズ。AI が完全自律で実装する。

- **Step 1 — Architecture**: 技術スタック選定・システム構成図・API設計・認可ポリシーを決定する
- **Step 2 — Data Model**: エンティティ・ER図・インデックス戦略・API マッピングを設計する
- **Step 3 — Implementation**: AI が全機能を一括実装する。テストコード必須（ビルド成功 + 全テスト通過が完了条件）
- **Step 4 — Approval Gate**: 実装結果をレビューし、承認すると Phase 5 へ

### Phase 5: Quality Gate（品質関門）

```
/aidlc:quality-gate
```

リリース前の品質を横断的に検証するフェーズ。

- **Step 1 — Quality Check & Auto-Fix**: サブエージェント（`quality-checker`）がテスト・Lint・型チェック・セキュリティ・パフォーマンスを一括チェックし、自動修正可能な問題を修正する。品質レポートを生成
- **Step 2 — Approval Gate (Go/No-Go)**: レポートを確認し、Go なら Phase 6 へ

### フィードバックによる差し戻し

各 Approval Gate でフィードバックを出すと、内容に応じて適切なフェーズ・ステップに戻れます。例:

- 「方向性が違う」→ Phase 1 に戻る
- 「画面構成を変えたい」→ Phase 2 に戻る
- 「この画面の見た目を調整したい」→ Phase 3 Step 2 に戻る
- 「アーキテクチャを変えたい」→ Phase 4 Step 1 に戻る

差し戻し時は影響のあるステップのチェックボックスのみリセットされ、修正後に元のフェーズに戻ります。

### 途中から再開する

セッションが切れても `/aidlc:status` で現在地を確認し、該当フェーズのコマンドを実行すれば途中から再開できます。進捗は `aidlc-docs/aidlc-state.md` に保存されています。

## フェーズフロー

```
Phase 1: Inception（構想）
  → Phase 2: Blueprint（UI設計）
    → Phase 3: Prototype（検証）
      → Phase 4: Construction（実装）
        → Phase 5: Quality Gate（品質関門）
          → Phase 6: Delivery（デリバリー）※未実装
```

各フェーズの末尾には **Approval Gate** があり、人間が承認するまで次に進みません。
フィードバックに応じて、適切なフェーズ・ステップに差し戻すことも可能です。

## 成果物パス一覧

すべて `aidlc-docs/` 配下に生成されます。

| Phase | 成果物 |
|---|---|
| 共通 | `aidlc-state.md`（進捗管理）、`audit.md`（監査ログ） |
| Inception | `inception/intent.md`、`inception/requirements.md`、`inception/user-stories.md` |
| Blueprint | `blueprint/ui-design.md` |
| Prototype | `prototype/design.md`、`prototype/` 配下のコード |
| Construction | `construction/architecture.md`、`construction/data-model.md`、プロダクションコード |
| Quality Gate | `quality-gate/report.md` |

## 設計思想

- **AI-Driven**: AIが具体化・設計・実装・テストを駆動。人間は意思決定に集中
- **Reproducible**: 標準化されたプロセスで一貫した品質を実現
- **Adaptive**: 技術スタック・規模を問わず適用可能

詳細は [philosophy.md](./philosophy.md) を参照。

## ライセンス

MIT
