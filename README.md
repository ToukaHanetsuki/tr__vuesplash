# Catch up with the backend

## Environment
git clone [リポジトリurl]

docker-compose build

make serve

make watch

make ssh

make db

## 目的
そろそろバックエンドの言語一つくらいは習得してみようと考えた。
今回選定したLaravelもリーディング自体は可能だがスタートアップから参加可能かと言われたらそうではないので、ひとまずアプリケーションをチュートリアルサイトを参考に作成する。
Vue3.0のリリースに先駆けComposition APIをTypeScriptを用いて利用する。Vuexは捨てた。

**参考**
- [Laravel-MixでVue + Vuetify + TypeScript](https://qiita.com/ProjectEuropa/items/359859855de670a995a1)
- [【webpack】[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.](https://qiita.com/7110/items/e6fba3dce01ea85bddb7)
- [Vue.js 3.0で搭載される Composition APIをリリースに先駆けて試してみた](https://tech.smartcamp.co.jp/entry/try-vue-composition-api)
- [TypeScriptでVuexを使わないという選択肢](https://qiita.com/hiroiku/items/e6b3a5c823c367c8e45b)
- [Vue Composition API を使ったストアパターンと TypeScript の組み合わせはどのくらいスケールするか？](https://qiita.com/tmy/items/a545e44100247c364a71)

## 参考教材
**Vue + Vue Router + Vuex + Laravelで写真共有アプリを作ろう**
- [(1) イントロダクション](https://www.hypertextcandy.com/vue-laravel-tutorial-introduction/)
- [(2) アプリケーションの設計](https://www.hypertextcandy.com/vue-laravel-tutorial-application-design/)
- [(3) SPA開発環境とVue Router](https://www.hypertextcandy.com/vue-laravel-tutorial-setting-up-spa-project/)
- [(4) 認証API](https://www.hypertextcandy.com/vue-laravel-tutorial-authentication/)
- [(5) 認証ページ](https://www.hypertextcandy.com/vue-laravel-tutorial-authentication-part-2/)
- [(6) 認証機能とVuex](https://www.hypertextcandy.com/vue-laravel-tutorial-authentication-part-3/)
- [(7) 認証機能とVuex Part.2](https://www.hypertextcandy.com/vue-laravel-tutorial-authentication-part-4/)
- [(8) エラーハンドリング](https://www.hypertextcandy.com/vue-laravel-tutorial-error-handling/)
- [(9) 写真投稿API](https://www.hypertextcandy.com/vue-laravel-tutorial-submit-photo/)
- [(10) 写真投稿フォーム](https://www.hypertextcandy.com/vue-laravel-tutorial-submit-photo-part-2/)
- [(11) 写真一覧取得API](https://www.hypertextcandy.com/vue-laravel-tutorial-list-photos/)
- [(12) 写真一覧ページ](https://www.hypertextcandy.com/vue-laravel-tutorial-list-photos-part-2/)
- [(13) 写真詳細ページ](https://www.hypertextcandy.com/vue-laravel-tutorial-photo-detail/)
- [(14) コメント投稿機能](https://www.hypertextcandy.com/vue-laravel-tutorial-add-comment/)
- [(15) いいね機能](https://www.hypertextcandy.com/vue-laravel-tutorial-likes/)
- [(16) エラーハンドリング Part.2](https://www.hypertextcandy.com/vue-laravel-tutorial-error-handling-part-2/)

### 進捗状況
- (1) イントロダクション [◎]
- (2) アプリケーションの設計 [◎]
- (3) SPA開発環境とVue Router [◎]
- (4) 認証API [◎]
- (5) 認証ページ [◎]
- (6) 認証機能とVuex [◎]
- (7) 認証機能とVuex Part.2
- (8) エラーハンドリング
- (9) 写真投稿API
- (10) 写真投稿フォーム
- (11) 写真一覧取得API
- (12) 写真一覧ページ
- (13) 写真詳細ページ
- (14) コメント投稿機能
- (15) いいね機能
- (16) エラーハンドリング Part.2

## to be continued
ReactやNext.js・Nuxt.jsの習得を行いたい。Railsも参画案件で利用しているサーバーサイド言語である為、習得の候補である。
Vue3がくるまではゆったりとキャッチアップを進めていきたい。