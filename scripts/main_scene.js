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
        this.load.image('ringo','assets/ringo.png');
        this.load.image('orange','assets/orange.png');
    }


    create() {
        this.add.image(400, 300, 'back');
        const taro = this.physics.add.sprite(50, 50, 'taro');
        this.taro = taro;
        const hanako = this.physics.add.sprite(750, 400, 'hanako');
        this.hanako = hanako;
        let staticGroup = this.physics.add.staticGroup();
        for(let i = 0; i < 5; i++){
        let randx = Phaser.Math.Between(25, 775) ; // y は　50～750の間の値
        let randy =  Phaser.Math.Between(25, 425) ;  // y は　50～200の間の値
        staticGroup.create(randx,randy,'ringo');
        }
        for(let i = 0; i < 5; i++){
        let randx2 = Phaser.Math.Between(25, 775) ; // y は　50～750の間の値
        let randy2 =  Phaser.Math.Between(25, 425) ;
        staticGroup.create(randx2,randy2,'orange');
        }
        this.physics.add.overlap(taro, staticGroup, stopgame, null, this);
        function stopgame(p){
            this.physics.pause();
        }
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