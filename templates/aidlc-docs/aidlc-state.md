# AI-DLC State

> AI-Driven Development Lifecycle の進捗状況

## Current Phase: Phase 1 - Inception

---

## 横断ルール

### 過信防止（Overconfidence Prevention）

- AIは「たぶんこうだろう」で進めず、不確実な点は人間に質問すること
- 特に以下の場面では確認を優先する:
  - 要件の解釈が複数あり得るとき
  - 技術選定でトレードオフがあるとき
  - スコープの境界が曖昧なとき

### 監査ログ（Audit Log）

- `aidlc-docs/audit.md` にはユーザーの発言を原文のまま記録すること（要約・言い換え禁止）
- 追記のみ。過去の記録を上書き・削除しない
- 各エントリにはフェーズ・ステップのコンテキストを含める

---

## Phase 1: Inception（構想）

- [ ] Step 1: Intent（意図の表明）
  - 人間がビジョンを語り、AIが対話で深掘りする
  - 成果物: `inception/intent.md`
- [ ] Step 2: Requirements（要件の具体化）
  - AIが要件・ユーザーストーリー・MVPスコープを生成する
  - 要件間の矛盾を検出し、解消されるまで次に進まないこと
  - 成果物: `inception/requirements.md`, `inception/user-stories.md`
- [ ] Step 3: Approval Gate（承認）
  - 人間が要件を確認し承認する

## Phase 2: Blueprint（設計）

- [ ] Step 1: UI Design（UI設計 — ラフレベル）
  - AIが画面一覧・遷移フロー・各画面の概要をラフレベルで設計する
  - 成果物: `blueprint/ui-design.md`
- [ ] Step 2: Approval Gate（承認）
  - 人間が設計方針を確認し承認する

## Phase 3: Prototype（検証）

- [ ] Step 1: Prototype Design（プロトタイプ設計 + ラフ UI → 実装レベル UI 確定）
  - AIが最小限のエンティティ・ユースケース・モックデータを定義する
  - Phase 2 のラフ UI 設計を実装レベルに詳細化し確定する（レイアウト・コンポーネント・表示データ・インタラクション）
  - 成果物: `prototype/design.md`
- [ ] Step 2: Rapid Build（高速構築・UI設計に忠実に実装）
  - AIが動作するプロトタイプを高速生成する（品質より速度優先、ただしUI設計は忠実に）
  - 成果物: `prototype/` 配下のコード
- [ ] Step 3: Review & Feedback（レビュー・フィードバック）
  - 人間がプロトタイプを触って判断する
  - → 方向性が違う → Phase 1 に戻る
  - → 設計を変えたい → Phase 2 に戻る
  - → 画面構成・導線を変えたい → Step 1 に戻りUI設計修正
  - → 画面の見た目・表示を調整 → Step 2 に戻り再ビルド
  - → OK → Phase 4 へ進む（UI設計確定）

## Phase 4: Construction（実装）

- [ ] Step 1: Architecture（アーキテクチャ設計）
  - プロトタイプ検証を踏まえ、AI がプロダクション用のアーキテクチャを設計する
  - 認可ポリシーを明記すること（誰がどのリソースにアクセスできるか）
  - 成果物: `construction/architecture.md`
- [ ] Step 2: Data Model（データモデル設計）
  - Architecture を踏まえ、AI がエンティティ・リレーション・APIマッピングを設計する
  - インデックス戦略を明記すること（外部キー、検索対象カラム）
  - 成果物: `construction/data-model.md`
- [ ] Step 3: Implementation（実装）
  - AI agent が全機能を実装する（コード + テスト）
  - プロトタイプは参照のみ。プロダクション品質でゼロから構築する
  - テストコードは必須。最低限 API エンドポイントの統合テストを含むこと
  - 実装完了の条件: ビルド成功 + 全テスト通過
  - 成果物: プロダクションコード + テストコード
- [ ] Step 4: Approval Gate（承認）
  - 人間が実装結果をレビューし承認する
  - → 方向性が違う → Phase 1 に戻る
  - → 画面構成・フロー変更 → Phase 2 に戻る
  - → UI詳細変更 → Phase 3 に戻る
  - → アーキテクチャ変更 → Step 1 に戻る
  - → データモデル変更 → Step 2 に戻る
  - → 実装の修正 → Step 3 に戻り修正
  - → OK → Phase 5 へ進む

## Phase 5: Quality Gate（品質関門）

- [ ] Step 1: Quality Check & Auto-Fix（品質チェック・自動修正）
  - AI agent がコード品質（重複検出含む）・セキュリティ・パフォーマンスを横断的にチェックする
  - テスト実行: 全テストが通ることを確認する
  - 自動修正可能な問題は修正し、品質レポートを生成する
  - 成果物: `quality-gate/report.md`（テスト結果を含む）
- [ ] Step 2: Approval Gate（Go/No-Go）
  - 人間が品質レポートをレビューし、Go/No-Go 判断する

## Phase 6: Delivery（デリバリー）※仮

- [ ] Step 1: CI/CD Setup（CI/CDセットアップ）
  - AIがパイプラインを構築する
  - 成果物: CI/CD設定ファイル
- [ ] Step 2: Deploy（デプロイ）
  - AIがデプロイを実行する
- [ ] Step 3: Documentation（ドキュメント整備）
  - AIが運用ドキュメントを生成する
  - 成果物: `delivery/docs/`
- [ ] Step 4: Approval Gate（承認）
  - 人間が最終確認しリリースを承認する
