# AI-DLC Design Progress

> AI-DLC ワークフロー自体の設計進捗（メタ管理）

## 設計状況

- [x] 思想・原則の策定 → `philosophy.md`
- [x] フェーズ構成の決定（6フェーズ）
- [x] 横断的な仕組みの設計
  - [x] `aidlc-docs/aidlc-state.md` - 進捗チェックボックス
  - [x] `aidlc-docs/log.md` - 対話・意思決定の記録
- [x] Phase 1: Inception 詳細設計
- [x] Phase 2: Blueprint 詳細設計
- [x] Phase 3: Prototype 詳細設計
- [ ] Phase 4: Construction 詳細設計
- [ ] Phase 5: Quality Gate 詳細設計
- [ ] Phase 6: Delivery 詳細設計
- [ ] 全フェーズ確定後、ドキュメント最終整備
- [ ] Claude Code プラグイン化

## 確定済みフェーズ詳細

### Phase 1: Inception（構想）
- Step 1: Intent（意図の表明）→ `aidlc-docs/inception/intent.md`
- Step 2: Requirements（要件の具体化）→ `aidlc-docs/inception/requirements.md`, `aidlc-docs/inception/user-stories.md`
- Step 3: Approval Gate（承認）

### Phase 2: Blueprint（設計）
- Step 1: Architecture → `aidlc-docs/blueprint/architecture.md`
- Step 2: UI/UX Design → `aidlc-docs/blueprint/ui-design.md`
- Step 3: Data Model → `aidlc-docs/blueprint/data-model.md`
- Step 4: Team Plan（チーム・並列設計）→ `aidlc-docs/blueprint/team-plan.md`
  - 人数 + 担当領域 + 並列ストリーム設計
- Step 5: Approval Gate（承認）

### Phase 3: Prototype（検証）
- Step 1: Prototype Design → `aidlc-docs/prototype/design.md`
- Step 2: Rapid Build → `aidlc-docs/prototype/` 配下のコード
- Step 3: Review & Feedback（フィードバックループ）
  - 方向性が違う → Phase 1 に戻る
  - 設計を変えたい → Phase 2 に戻る
  - UI/操作感を改善 → Step 2 に戻り再ビルド
  - OK → Phase 4 へ進む
  - ※ 戻る際は `aidlc-docs/log.md` にフィードバック理由を記録

### Phase 4〜6（仮案・未確定）

#### Phase 4: Construction（実装）
- Step 1: Task Decomposition → `aidlc-docs/construction/tasks.md`
- Step 2: Implementation
- Step 3: Test
- Step 4: Approval Gate

#### Phase 5: Quality Gate（品質関門）
- Step 1: Code Review
- Step 2: Security Check
- Step 3: Performance Check
- Step 4: Approval Gate（Go/No-Go）

#### Phase 6: Delivery（デリバリー）
- Step 1: CI/CD Setup
- Step 2: Deploy
- Step 3: Documentation → `aidlc-docs/delivery/docs/`
- Step 4: Approval Gate（最終承認）

## ファイル構成

```
aidlc-workflows/
├── philosophy.md        # 思想・原則
├── design-progress.md   # この設計自体の進捗（本ファイル）
├── playbooks/           # AI実行手順書
│   ├── phase1-inception.md
│   ├── phase2-blueprint.md
│   └── phase3-prototype.md
├── templates/           # 成果物テンプレート
│   └── aidlc-docs/
└── aidlc-docs/          # プロジェクト成果物
    ├── aidlc-state.md       # プロジェクト進捗管理
    ├── log.md               # 対話・意思決定の記録
    ├── inception/           # Phase 1 成果物
    │   ├── intent.md
    │   ├── requirements.md
    │   └── user-stories.md
    ├── blueprint/           # Phase 2 成果物
    │   ├── architecture.md
    │   ├── ui-design.md
    │   ├── data-model.md
    │   └── team-plan.md
    ├── prototype/           # Phase 3 成果物
    │   └── design.md
    ├── construction/        # Phase 4 成果物
    │   └── tasks.md
    └── delivery/            # Phase 6 成果物
        └── docs/
```
