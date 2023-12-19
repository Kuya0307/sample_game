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
        let cursors = this.input.keyboard.createCursorKeys();

        if(cursors.up.isDown){
            console.log("Up!!");
            this.taro.setVelocityY(-40);// 上方向の速度を設定
            this.hanako.setVelocityY(40);// 上方向の速度を設定
        } else if(cursors.down.isDown){
            console.log("down!!");
            this.taro.setVelocityY(40);// 下方向の速度を設定
            this.hanako.setVelocityY(-40);// 下方向の速度を設定
        }else if(cursors.left.isDown){
            console.log("Left");
            this.taro.setVelocityX(-40);// 左方向の速度を設定
            this.hanako.setVelocityX(40);// 左方向の速度を設定
        }else if(cursors.right.isDown){
            console.log("Right!!");
            this.taro.setVelocityX(40);// 右方向の速度を設定
            this.hanako.setVelocityX(-40);// 右方向の速度を設定
        }else{
            this.taro.setVelocityX(0);// 横方向の速度を0
            this.taro.setVelocityY(0);// 縦方向の速度を0
            this.hanako.setVelocityX(0);// 横方向の速度を0
            this.hanako.setVelocityY(0);// 縦方向の速度を0
        }
    }
    
}