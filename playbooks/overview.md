# AI-DLC Workflow Overview

> 全フェーズ・ステップの Input / Output と流れの一覧

## フェーズ全体の流れ

```
Phase 1: Inception → Phase 2: Blueprint → Phase 3: Prototype → Phase 4: Construction → Phase 5: Quality Gate → Phase 6: Delivery
```

## 用語

- **確認**: 中間ステップで方向性をチェックすること。修正すればそのまま続行する
- **承認**: Approval Gate でフェーズ全体を判断すること。次フェーズに進む / 戻るを決定する

## 横断的な仕組み

- `aidlc-docs/aidlc-state.md`: 全フェーズ・ステップの進捗チェックボックス。Current Phase を常に更新する
- `aidlc-docs/log.md`: 対話サマリー・意思決定・フィードバックを時系列に記録する

---

## Phase 1: Inception（構想）

> 人間の漠然としたアイデアを、実行可能な要件に変換する

| Step             | Input       | Output                                                   | 人間の関与 |
| ---------------- | ----------- | -------------------------------------------------------- | ---------- |
| 1: Intent        | 人間の対話  | `inception/intent.md`                                    | 確認       |
| 2: Requirements  | `intent.md` | `inception/requirements.md`, `inception/user-stories.md` | 確認       |
| 3: Approval Gate | 全成果物    | —                                                        | 承認       |

---

## Phase 2: Blueprint（設計）

> 画面構成・ユーザーフローをラフレベルで設計する

| Step             | Input          | Output                   | 人間の関与 |
| ---------------- | -------------- | ------------------------ | ---------- |
| 1: UI Design     | Phase 1 成果物 | `blueprint/ui-design.md` | 確認       |
| 2: Approval Gate | `ui-design.md` | —                        | 承認       |

---

## Phase 3: Prototype（検証）

> UI設計を実装レベルに詳細化し、動作するプロトタイプで検証する

| Step                 | Input                 | Output                     | 人間の関与 |
| -------------------- | --------------------- | -------------------------- | ---------- |
| 1: Prototype Design  | Phase 1〜2 成果物     | `prototype/design.md`      | 確認       |
| 2: Rapid Build       | `prototype/design.md` | 動作するプロトタイプコード | なし       |
| 3: Review & Feedback | プロトタイプ          | フィードバックに基づく判断 | 承認       |

**フィードバックルート:**

- 方向性違い → Phase 1
- 設計変更 → Phase 2
- 画面構成・導線変更 → Step 1
- 見た目調整 → Step 2
- OK → Phase 4

---

## Phase 4: Construction（実装）

> プロトタイプ検証を踏まえて技術設計し、AI agent が完全自律でプロダクションコードを構築する

| Step              | Input                                                         | Output                         | 人間の関与 |
| ----------------- | ------------------------------------------------------------- | ------------------------------ | ---------- |
| 1: Architecture   | Phase 1〜3 成果物                                             | `construction/architecture.md` | 確認       |
| 2: Data Model     | `architecture.md` + Phase 1〜3 成果物                         | `construction/data-model.md`   | 確認       |
| 3: Implementation | Phase 4 設計成果物 + `user-stories.md`, `prototype/design.md` | プロダクションコード + テスト  | なし       |
| 4: Approval Gate  | 動作するアプリケーション + 受入基準充足状況                   | —                              | 承認       |

**フィードバックルート:**

- 方向性違い → Phase 1
- 画面構成・フロー変更 → Phase 2
- UI詳細変更 → Phase 3
- アーキテクチャ変更 → Step 1
- データモデル変更 → Step 2
- 実装修正 → Step 3
- OK → Phase 5

---

## Phase 5: Quality Gate（品質関門）

> コード品質・セキュリティ・パフォーマンスを横断的に検証する

| Step                        | Input                                                                        | Output                   | 人間の関与 |
| --------------------------- | ---------------------------------------------------------------------------- | ------------------------ | ---------- |
| 1: Quality Check & Auto-Fix | プロダクションコード + `requirements.md`, `architecture.md`, `data-model.md` | `quality-gate/report.md` | なし       |
| 2: Approval Gate (Go/No-Go) | `report.md`                                                                  | —                        | 承認       |

**判断ルート:**

- Go → Phase 6
- No-Go（軽微）→ Step 1 再実行
- No-Go（根本的）→ Phase 4

---

## Phase 6: Delivery（デリバリー）

> 未確定。別途設計予定。

---

## 成果物パス一覧

| Phase           | 成果物                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------- |
| 1: Inception    | `inception/intent.md`, `inception/requirements.md`, `inception/user-stories.md`             |
| 2: Blueprint    | `blueprint/ui-design.md`                                                                    |
| 3: Prototype    | `prototype/design.md`, `prototype/` 配下のコード                                            |
| 4: Construction | `construction/architecture.md`, `construction/data-model.md`, プロダクションコード + テスト |
| 5: Quality Gate | `quality-gate/report.md`                                                                    |

> すべての成果物パスは `aidlc-docs/` 配下の相対パス
