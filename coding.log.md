# Coding Implementation Log

## 2026-01-07

### 実装内容（13:18）
- activityページを作成
- サインイン後にactivityページへ遷移するように変更

### 実装詳細
- `ng generate component activity`でactivityコンポーネント生成
- `src/app/app.routes.ts`に`/activity`ルートを追加
  - Activityコンポーネントをインポート
  - `/activity`パスの設定を追加
- `src/app/signin/signin.ts`のリダイレクト先を`/activity`に変更
  - サインイン成功時のナビゲート先を`/`から`/activity`に更新

### 実装内容（13:10）
- Googleアカウント連携のサインイン機能を実装
- @pathoslogos.co.jpドメイン制限を追加
- バーガーメニューにサインアウトボタンを設置

### 実装詳細
- `src/app/signin/signin.ts`にGoogle認証ロジックを実装
  - Firebase Auth `signInWithPopup`でGoogleサインイン
  - メールアドレスのドメインチェック（@pathoslogos.co.jpのみ許可）
  - 不正なドメインの場合は自動サインアウト
- `src/app/signin/signin.html`にサインインUIを作成
  - Googleアイコン付きサインインボタン
  - エラーメッセージ表示機能
- `src/app/signin/signin.scss`にスタイルを追加
- `src/app/toolbar/toolbar.ts`に認証状態監視とサインアウト機能を追加
  - `onAuthStateChanged`で認証状態を監視
  - サインアウト後は`/signin`へリダイレクト
- `src/app/toolbar/toolbar.html`にサインアウトボタンを追加
  - サインイン状態の場合のみ表示
- `src/app/toolbar/toolbar.scss`にサインアウトボタンのスタイルを追加

### 実装内容（12:01）
- Firebaseの設定を環境変数から読み込むように修正

### 実装詳細
- `src/app/app.config.ts`に`environment`をインポート
- `initializeApp()`の引数をハードコードから`environment.firebaseConfig`に変更
- Firebase設定を`src/environments/environment.ts`から取得するように統一

### 実装内容（最新）
- signinページを作成
- /signinルーティングの設定
- rootにアクセスされたらsigninにページ遷移するように設定

### 実装詳細
- `ng generate component signin`でsigninコンポーネント生成
- `src/app/app.routes.ts`を作成し、ルーティング設定を追加
  - ルートパス('')を'/signin'にリダイレクト
  - '/signin'パスにSigninコンポーネントを割り当て
- `src/app/app.config.ts`に`provideRouter(routes)`を追加
- `src/app/app.ts`に`RouterOutlet`をインポートし、importsに追加
- `src/app/app.html`に`<router-outlet>`を配置

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
