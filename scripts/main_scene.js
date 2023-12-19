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
        this.load.image('taro','assets/taro.png');
        this.load.image('hanako','assets/hanako.png');
    }


    create() {
        this.add.image(400, 300, 'back');
        const taro = this.physics.add.sprite(50, 50, 'taro');
        this.taro = taro;
        const hanako = this.physics.add.sprite(750, 400, 'hanako');
        this.hanako = hanako;
    }


    update(time,delta) {
        
    }
    
}