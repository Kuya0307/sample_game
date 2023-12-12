class MainScene extends Phaser.Scene {

    // コンストラクタ
    constructor() {
        //Sceneを拡張してクラスを作る際にコンストラクタでSceneの設定を渡します
        //keyでシーンのキー、activeでシーンの自動実行を設定できます
       super({ key: 'MyScene1', active: true });
   }

    preload() {
        // 画像の読み込み(使用する時の名前, パス)
        this.load.image('back', 'assets/back.jpg');
    }


    create() {
        this.add.image(400, 300, 'back');
    }


    update(time,delta) {
        
    }
    
}