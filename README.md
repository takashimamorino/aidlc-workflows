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
