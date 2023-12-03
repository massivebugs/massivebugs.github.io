---
post_group: lantern
title: Plans for a new Robot project 2
published: true
tags: robots arduino raspberry-pi
---

[Lanternロボットプロジェクト](/post-group/lantern)シリーズのパート2です。  
小さくて、持ち歩きやすい、カメラと道を照らす機能付きのランタン型のロボットを作りたいと思います。  
もう少しロボットのデザインをスケッチしました。うまく作れたらいいですね。

{% capture items %}
    <img src="/assets/images/unnamed_robot_idea_3.jpg">|
    <img src="/assets/images/unnamed_robot_idea_4.jpg">|
    <img src="/assets/images/unnamed_robot_idea_5.jpg">
{% endcapture %}
{% include swiper.html id="swiper-2" items=items description="Additional ideas for unnamed robot"%}

#### プロジェクト名:
- Lantern 

#### 使えるところの概要 
1. **ランプ**のように使えて持ち運びやすいように上部に取手がついてる。
    - 音声コマンドでオンオフできる。
    - 光加減を調整できる。

2. **カメラ**として使えて、自撮りやポートレートを撮るとき自動でポジション修正してうまく写真を撮ってくれる。取手をどこかに引っ掛けてセキュリティーカメラとしても使える。 

3. **データ収集**用でも使える。
    - モジュール化したセンサーを取り付けることで増やせる。


#### 入れたい機能
- 顔認識 
- オブジェクト追跡 
- 回転できるカメラ
- マイクとボイスコマンド
- スピーカーと音声フィードバック
- 複数のLEDランプモード
- 取り付け可能なセンサーモジュール
- 4-9DOFのトライポッド足