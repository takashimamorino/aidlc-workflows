# AI-DLC State

> AI-Driven Development Lifecycle の進捗状況

## Current Phase: Phase 1 - Inception

---

## Phase 1: Inception（構想）

- [ ] Step 1: Intent（意図の表明）
  - 人間がビジョンを語り、AIが対話で深掘りする
  - 成果物: `inception/intent.md`
- [ ] Step 2: Requirements（要件の具体化）
  - AIが要件・ユーザーストーリー・MVPスコープを生成する
  - 成果物: `inception/requirements.md`, `inception/user-stories.md`
- [ ] Step 3: Approval Gate（承認）
  - 人間が要件を確認し承認する

## Phase 2: Blueprint（設計）

- [ ] Step 1: UI Design（UI設計 — ラフレベル）
  - AIが画面一覧・遷移フロー・各画面の概要をラフレベルで設計する
  - 成果物: `blueprint/ui-design.md`
- [ ] Step 2: Architecture（アーキテクチャ設計）
  - UI構成を踏まえ、AIが技術選定・システム構成を提案する
  - 成果物: `blueprint/architecture.md`
- [ ] Step 3: Data Model（データモデル設計）
  - AIがエンティティ・リレーションを設計する
  - 成果物: `blueprint/data-model.md`
- [ ] Step 4: Team Plan（チーム・並列設計）
  - チームメンバー数・担当領域・並列ストリームを設計する
  - 成果物: `blueprint/team-plan.md`
- [ ] Step 5: Approval Gate（承認）
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

## Phase 4: Construction（実装）※仮

- [ ] Step 1: Task Decomposition（タスク分解）
  - AIが設計 + Team Plan に基づきタスクを生成する
  - 成果物: `construction/tasks.md`
- [ ] Step 2: Implementation（実装）
  - 各メンバーがAIとペアで担当タスクを実装する
  - 成果物: プロダクションコード
- [ ] Step 3: Test（テスト）
  - AIがユニット・統合テストを作成・実行する
  - 成果物: テストコード・テスト結果
- [ ] Step 4: Approval Gate（承認）
  - 人間が実装結果をレビューし承認する

## Phase 5: Quality Gate（品質関門）※仮

- [ ] Step 1: Code Review（コードレビュー）
  - AIがコード品質・ベストプラクティスをチェックする
- [ ] Step 2: Security Check（セキュリティチェック）
  - AIが脆弱性・セキュリティリスクを検査する
- [ ] Step 3: Performance Check（パフォーマンス検証）
  - AIがパフォーマンス問題を検出する
- [ ] Step 4: Approval Gate（承認）
  - 人間がGo/No-Go判断する

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
