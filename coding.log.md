# Coding Implementation Log

## 2026-01-07

### 実装内容
- Firebaseの設定を環境変数から読み込むように修正

### 実装詳細
- `src/app/app.config.ts`に`environment`をインポート
- `initializeApp()`の引数をハードコードから`environment.firebaseConfig`に変更
- Firebase設定を`src/environments/environment.ts`から取得するように統一

## 2026-01-06

### 実装内容
- toolbarコンポーネントを作成
- 左側にメニューアイコンを設置
- メニューアイコンクリックでバーガーメニューを表示
- メニュー項目: アクティビティ、セッティング
- appコンポーネントにtoolbarを配置

### 実装詳細
- `ng generate component toolbar`でコンポーネント生成
- ハンバーガーメニューアイコン（3本線）を実装
- クリックでサイドメニューをスライド表示
- オーバーレイ付きで背景クリックで閉じる機能
- Angular 20の新しい@if構文を使用
- レスポンシブデザイン対応のSCSSスタイリング
