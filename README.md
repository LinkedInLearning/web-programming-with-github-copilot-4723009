# GitHub Copilotで始めるWebプログラミング
LinkedInラーニングの「GitHub Copilotで始めるWebプログラミング」コース用のリポジトリです。このコースは [LinkedInラーニング][lil-course-url]で視聴できます。

![GitHub Copilotで始めるWebプログラミング][lil-thumbnail-url] 
GitHub CopilotはAIと協働しながらプログラミングできる開発支援ツールです。コードの補完はもちろん、質問への回答や改善提案、リファクタリング支援など開発のあらゆる場面でサポートしてくれるので、プログラマーはより創造的なコーディングに集中できるようになります。このコースではGitHub Copilotを活用したWebプログラミングの基本について解説します。Copilotの導入方法からコードの補完機能、Chatを使った対話による開発やAgentsによる自動化プログラミングまで、実際の操作を交えながらCopilotでペアプログラミングをするためのさまざまな手順を紹介します。

## リポジトリの使い方
このリポジトリには必要に応じてブランチが設けられています。ブランチのポップアップメニューを使用して、使用するブランチに切り替えたあとにコースを視聴してください。またURLに`「/tree/ブランチ名」`を追加することで、アクセスしたいブランチに移動することも可能です。

## ブランチ
ブランチはレッスンごとに作成されている場合があります。その場合はブランチ名に`「章番号_レッスン番号」`が付けられています。例えば`「02_03」`という名前のブランチは、2章の上から3番目のレッスン用のブランチとなります。

レッスン前と後のコードを格納しているブランチもあります。該当ブランチには「開始時」（beginning）を表す`「b」`と、「終了時」（ending）を表す`「e」` がブランチ名についています。`「b」`のブランチにはレッスン開始時点のコードが、`「e」`のブランチにはレッスン終了時点のコードが格納されています。また「main」のブランチにはコードの最終形が格納されています。

ファイルに変更を加えた後に、エクササイズファイルのブランチを次のブランチに切り替えたさい、次のようなメッセージが表示されることがあります。

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

この問題を解決するには：
	
次のコマンドで変更を加えます：git add .
次のコマンドで変更をコミットします：git commit -m "some message"

## GitHub Codespacesについて
プログラミング言語を学ぶ最良の方法は、実際にそれを使用することです。それがこのコースがGitHub Codespacesと統合されている理由です。GitHub Codespacesは、あなたが普段使っているIDEのすべての機能を提供するクラウド上の手軽な開発環境です。ローカルマシンのセットアップも必要ありません。 GitHub Codespacesを使えば、あなたが職場で使っている他のツールを使用しながら、どのパソコンからでもいつでもプログラミングの実践的な練習ができます。「このコースでGitHub Codespacesを使うには」の動画をチェックして、その使い方を学びましょう。

### インストラクター

**沖 良矢**

_インタラクションデザイナー_

この講師の他のコースを視聴する：[LinkedInラーニング](https://www.linkedin.com/learning/instructors/8515347)

[lil-course-url]: https://www.linkedin.com/learning/
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4E0DAQG0eDHsyOSqTA/learning-public-crop_675_1200/B4EZVdqqdwHUAY-/0/1741033220778?e=2147483647&v=beta&t=FxUDo6FA8W8CiFROwqfZKL_mzQhYx9loYLfjN-LNjgA

