class MainScene extends Phaser.Scene {

    // コンストラクタ
    constructor() {
        //Sceneを拡張してクラスを作る際にコンストラクタでSceneの設定を渡します
        //keyでシーンのキー、activeでシーンの自動実行を設定できます
       super({ key: 'MyScene1', active: true });
   }

    preload() {
        // 画像の読み込み(使用する時の名前, パス)
       this.load.image('taro', 'assets/taro.png');
       this.load.image('taro2', 'assets/taro2.png');
       this.load.image('hanako', 'assets/hanako.png');
       this.load.image('back', 'assets/background.png');
    }


    create() {
       this.add.image(400, 300, 'back');
       const taro = this.physics.add.sprite(500, 350, 'taro');
    //    const taro2 = this.physics.add.sprite(400, 250, 'taro2');
       this.taro = taro
    //    this.taro2 = taro2
       this.taro_direction = 1;
       this.taro.angle = 0;
       ///WASDキーを検知できるようにする
       this.keys = {};
       this.keys.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
       this.keys.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
       this.keys.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
       this.keys.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

       //タイマー
       this._timeCounter = 0;  
       //残り時間
       this._leftTime = 3;
       this._leftTimeText = this.add.text(300, 16, 'Time: ' + this._leftTime, { fontSize: '28px', fill: '#FFF' ,fontFamily: "Arial"}); //時間表示
       // カウントダウンタイマーを稼働させるか判定するフラグ
       this.countdounTimer = true;


    //    this.text1 = this.add.text(100, 300, 'click! to Rotation!').setFontSize(32).setColor('#00f').setInteractive({ useHandCursor: true });
	// 	this.text2 = this.add.text(100, 400, 'Click! to Move and Rotation !').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
        this.MyWorld = this.add.text(600, 400, 'MyWorld').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
        this.Hello = this.add.text(100, 50, '').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });

        // let taroGroup = this.physics.add.group();// 動く物体をまとめる
        // taroGroup.taro

        this.hanakoGroup = this.physics.add.group();// 動く物体をまとめる
        // this.hanakoGroup.hanako

        this.physics.add.overlap(taro, this.hanakoGroup, text_hanako, null, this);

        function text_hanako(p,hanako){
            this.Hello = this.add.text(100, 150, '痛い！').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
            // hanako.disableBody(true, false);//衝突したら止まる(消えない)
            hanako.disableBody(false, true);//衝突したら止まる(消える)
            this.countdounTimer = false;
            this.physics.pause();
            this.Hello = this.add.text(150, 200, 'fin.').setFontSize(32).setColor('#0f0').setInteractive({ useHandCursor: true });
        }
    }
    

    // arrow_move(object){
    //     object.setVelocityY(5);// 上方向の速度を設定
    //     object.setVelocityX(5);
    // }


    arrow_move1(cursors, object){
    
        if(cursors.up.isDown){
            // console.log("Up!!");
            object.setVelocityY(-100);// 上方向の速度を設定
            
        }else if(cursors.down.isDown){
            // console.log("down!!");
            object.setVelocityY(100);// 下方向の速度を設定
    
        }else if(cursors.left.isDown){
            // console.log("Left");
            object.setVelocityX(-100);// 左方向の速度を設定
        }else if(cursors.right.isDown){
            // console.log("Right!!");
            object.setVelocityX(100);// 右方向の速度を設定
    
        }else{
            object.setVelocity(0,0);// 横方向の速度を0
        }
    }

    // arrow_move2(cursors, object){
    
    //     if(cursors.left.isDown){
    //         // console.log("Left");
    //         object.setVelocityX(10);// 左方向の速度を設定
    //     }else if(cursors.right.isDown){
    //         // console.log("Right!!");
    //         object.setVelocityX(-10);// 右方向の速度を設定
    
    //     }else{
    //         object.setVelocity(0,0);// 横方向の速度を0
    //     }
    // }


    keys_text(keys){
        if(keys.keyA.isDown){  //Aが押されている時
            this.Hello.setText('Hello!');
            // this.Hello_Hey.disableBody(true, true);
        }else if(keys.keyS.isDown){  //Sが押されている時
            this.Hello.setText('Hey!');
        }else if(keys.keyD.isDown){ //Dが押されている時 
            this.Hello.setText('');
        }
    }

    // rand_img(keys){
    //     if(keys.keyW.isDown){
    //         let  randx = Phaser.Math.Between(100, 400) ; // y は　50～750の間の値
    //         this.add.image(randx, 100 , 'hanako'); //ランダムな場所に生成
    //     }
    // }



    countdown(delta){

        // 毎フレーム事にタイマーを更新

        this._timeCounter += delta;

        // _timeCounterが1000になった1秒

        if(this._timeCounter > 1000) {
            this._timeCounter += delta;
            // _timeCounterが1000になった1秒
            if(this._timeCounter > 1000) {
                // 1000ミリ秒経過したのでカウンターをリセット
                this._timeCounter = 0;
                // 残り時間を減らす
                this._leftTime --;
                // テキストを更新する
                this._leftTimeText.setText('Time: ' + this._leftTime);
            }
        }

        if(this._leftTime <= 0) {

            // this._leftTime=30;

            this.quitGame();

        }
        
    }
    quitGame(){
        this._leftTime=3;
        if(this.hanako != null){
            this.hanako.destroy();
            this.hanako = null;
        }
        let  randx = Phaser.Math.Between(200, 400) ; 
        let  randy = Phaser.Math.Between(100, 200) ; 
        const hanako = this.hanakoGroup.create(randx, randy, 'hanako'); //ランダムな場所に生成
        this.hanako = hanako;
        hanako._timeCounter = 0; // hanako 固有のタイマーを初期化
        hanako._leftTime = 3; // hanako 固有の残り時間を初期化
        // this.countdounTimer = false;
        return;
    }



    update(time,delta) {
        // if (this.taro.x >= D_WIDTH - 100) this.taro_direction = -1;
        // if (this.taro.y >= D_HEIGHT - 100) this.taro_direction = -1;

        // if (this.taro.x <= 100) this.taro_direction = 1;
        // if (this.taro.y <= 100) this.taro_direction = 1;
        // //テキストオブジェクトにon()イベントを追加する
		// this.text1.on('pointerdown', function (pointer) {
        //     // 回転角度を更新
        //     this.taro.angle += 1;
        //     // 回転角度を設定
        //     this.taro.setAngle( this.taro.angle );
        // }, this);
        // if (this.taro_direction == 1) {
        //     this.taro.x += 5;
        //     this.taro.y += 5;
        // } else {
        //     this.taro.x -= 5;
        //     this.taro.y -= 5;
        // }

		// this.text2.on('pointerdown', function (pointer) {
        //     this.taro.angle += 1;
        //     this.player.setAngle(this.taro.angle );
        //     this.player.setVelocityX(20);   // 右方向の速度を設定
		// 	}, this);


        // // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();

        this.arrow_move1(cursors, this.taro);//矢印キーによるplayer1の移動
        // this.arrow_move2(cursors, this.taro2);

        this.keys_text(this.keys);
        // this.rand_img(this.keys);

        if(this.countdounTimer) this.countdown(delta);

    }
    
}