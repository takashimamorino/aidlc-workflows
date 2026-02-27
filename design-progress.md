# AI-DLC Design Progress

> AI-DLC ワークフロー自体の設計進捗（メタ管理）

## 設計状況

- [x] 思想・原則の策定 → `philosophy.md`
- [x] フェーズ構成の決定（6フェーズ）
- [x] 横断的な仕組みの設計
  - [x] `aidlc-docs/aidlc-state.md` - 進捗チェックボックス
  - [x] `aidlc-docs/audit.md` - 監査ログ（ユーザー発言の原文記録、追記のみ）
  - [x] 過信防止ルール（不確実な点は推測せず人間に質問）
- [x] Phase 1: Inception 詳細設計
- [x] Phase 2: Blueprint 詳細設計
- [x] Phase 3: Prototype 詳細設計
- [x] Phase 4: Construction 詳細設計
- [x] Phase 5: Quality Gate 詳細設計
- [ ] Phase 6: Delivery 詳細設計
- [ ] 全フェーズ確定後、ドキュメント最終整備
- [ ] Claude Code プラグイン化

## 用語規約

- **確認**: 中間ステップで方向性をチェックすること。修正すればそのまま続行する
- **承認**: Approval Gate でフェーズ全体を判断すること。次フェーズに進む / 戻るを決定する

## 確定済みフェーズ詳細

### Phase 1: Inception（構想）

- Step 1: Intent（意図の表明）→ `aidlc-docs/inception/intent.md`
- Step 2: Requirements（要件の具体化）→ `aidlc-docs/inception/requirements.md`, `aidlc-docs/inception/user-stories.md`
  - 要件間の矛盾を検出し、解消されるまで次に進まない
- Step 3: Approval Gate（承認）

### Phase 2: Blueprint（設計）

- Step 1: UI Design（ラフレベル: 画面一覧・遷移フロー・画面概要）→ `aidlc-docs/blueprint/ui-design.md`
- Step 2: Approval Gate（承認）

### Phase 3: Prototype（検証）

- Phase 2 のラフ UI 設計を実装レベルに詳細化し、確定する。UXは対象外。
- Step 1: Prototype Design（ラフ UI → 実装レベル UI 確定）→ `aidlc-docs/prototype/design.md`
- Step 2: Rapid Build（UI設計に忠実に実装）→ `aidlc-docs/prototype/` 配下のコード
- Step 3: Review & Feedback（フィードバックループ）
  - 方向性が違う → Phase 1 に戻る
  - 設計を変えたい → Phase 2 に戻る
  - 画面構成・導線を変えたい → Step 1 に戻りUI設計修正
  - 画面の見た目・表示を調整 → Step 2 に戻り再ビルド
  - OK → Phase 4 へ進む（UI設計確定）
  - ※ 戻る際は `aidlc-docs/audit.md` にフィードバック理由を記録

### Phase 4: Construction（実装）

- AI agent が完全自律で実装する。人間はコードを書かない。
- プロトタイプは UI・動作の参照としてのみ使用し、プロダクションコードはゼロから構築する。
- Step 1: Architecture（アーキテクチャ設計）→ `aidlc-docs/construction/architecture.md`
  - プロトタイプ検証を踏まえてプロダクション用アーキテクチャを設計
  - 認可ポリシーを明記すること（誰がどのリソースにアクセスできるか）
- Step 2: Data Model（データモデル設計）→ `aidlc-docs/construction/data-model.md`
  - Architecture を踏まえてエンティティ・リレーション・APIマッピングを設計
  - インデックス戦略を明記すること（外部キー、検索対象カラム）
- Step 3: Implementation（一括実装）
  - AI agent が全機能を一括実装（コード + テスト）
  - テストコードは必須。最低限 API エンドポイントの統合テストを含むこと
  - 実装完了の条件: ビルド成功 + 全テスト通過
- Step 4: Approval Gate（承認・フィードバックループ）
  - 方向性違い → Phase 1、設計変更 → Phase 2、UI変更 → Phase 3、実装修正 → Step 3

### Phase 5: Quality Gate（品質関門）

- Construction の「動くか？」に対し、「品質は十分か？」を横断的に検証する。
- Step 1: Quality Check & Auto-Fix（品質チェック・自動修正）→ `aidlc-docs/quality-gate/report.md`
  - テスト実行: 全テストが通ることを確認する
  - コード品質（重複検出含む）・セキュリティ・パフォーマンスを一括チェック、自動修正
- Step 2: Approval Gate（Go/No-Go）

### Phase 6: Delivery（デリバリー）※未確定

- 別途設計予定

## ファイル構成

```
aidlc-workflows/
├── philosophy.md          # 思想・原則
├── design-progress.md     # この設計自体の進捗（本ファイル）
├── playbooks/             # AI実行手順書
│   ├── overview.md
│   ├── phase1-inception.md
│   ├── phase2-blueprint.md
│   ├── phase3-prototype.md
│   ├── phase4-construction.md
│   └── phase5-quality-gate.md
└── templates/             # 成果物テンプレート（プロジェクト開始時にコピーして使う）
    └── aidlc-docs/
        ├── aidlc-state.md           # プロジェクト進捗管理
        ├── audit.md                 # 監査ログ（ユーザー発言の原文記録）
        ├── inception/               # Phase 1 成果物
        │   ├── intent.md
        │   ├── requirements.md
        │   └── user-stories.md
        ├── blueprint/               # Phase 2 成果物
        │   └── ui-design.md
        ├── prototype/               # Phase 3 成果物
        │   └── design.md
        ├── construction/            # Phase 4 成果物
        │   ├── architecture.md
        │   └── data-model.md
        └── quality-gate/            # Phase 5 成果物
            └── report.md
```
