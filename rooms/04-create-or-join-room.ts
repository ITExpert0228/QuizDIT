import { Room } from "colyseus";

export class CreateOrJoinRoom extends Room<any> {
    maxClients = 100;
    players = [];
    problems = [];
    gusers = [];
    step = 0;

    onInit (options) {
        console.log("CREATING NEW ROOM");
        this.players = [
            {
                uname: 'user1',
                fname: 'Test User1',
                pass: 'admin',
                email: 'tester1@quizdit.com',
                points: 100,
                avatar: 'userPic0.png'
            },
            {
                uname: 'user2',
                fname: 'Test User2',
                pass: 'admin',
                email: 'tester2@quizdit.com',
                points: 100,
                avatar: 'userPic1.png'
            },
            {
                uname: 'user3',
                fname: 'Test User3',
                pass: 'admin',
                email: 'tester3@quizdit.com',
                points: 100,
                avatar: 'userPic2.png'
            },
            {
                uname: 'user4',
                fname: 'Test User4',
                pass: 'admin',
                email: 'tester4@quizdit.com',
                points: 100,
                avatar: 'userPic3.png'
            },
            {
                uname: 'user5',
                fname: 'Test User5',
                pass: 'admin',
                email: 'tester5@quizdit.com',
                points: 100,
                avatar: 'userPic4.png'
            },
            {
                uname: 'user6',
                fname: 'Test User6',
                pass: 'admin',
                email: 'tester6@quizdit.com',
                points: 100,
                avatar: 'userPic5.png'
            },
            {
                uname: 'user7',
                fname: 'Test User7',
                pass: 'admin',
                email: 'tester7@quizdit.com',
                points: 100,
                avatar: 'userPic6.png'
            },
        ];
        
        this.problems = [
            {
                q: 'What will you gain from following the Road to the Sale?',
                a: ['More sales',
                'Higher commissions',
                'Spend less time per sale',
                'All of the above'],
                c: 3
            },
            {
                q: 'Taking shortcuts in the Road to the Sale will save you time and make you money.',
                a: ['True',
                'False'],
                c:2
            },
            {
                q: 'When should you turnover a customer?',
                a: ['As soon as they tell you they are not buying',
                'As soon as you feel you can\'t sell them a vehicle',
                'When they ask to speak to a manager',
                'When they ask for a brochure'],
                c: 2
            },
            {
                q: 'When actively listening, you should…',
                a: ['Respond to the customer as quickly as possible',
                'Start forming your reply even before the customer is finished talking',
                'Let the customer finish talking before forming your response',
                'What\'s the question, I wasn\'t listening?'],
                c: 3
            },
            {
                q: 'You should follow the…',
                a: ['ABC\'s',
                'ABG\'s',
                'None of the above',
                'All of the above'],
                c: 2
            }
        ];
    }

    onJoin (client, options, auth) {
        if (!options || !options.user) {
            this.broadcast({key:"custom"});
            console.log('join-custom', options, client.id);
            return;
        }
        var duplicated = false;
        this.gusers.forEach((user)=>{
            if (user.client == client.id || user.uname == options.user) duplicated = true;
        });

        if (duplicated) return;
        for (var i=0; i<this.players.length; i++) {
            var item = this.players[i];
            if (item.uname == options.user) {
                if (this.gusers.length == 0) {
                    item.create = true;
                } else {
                    item.create = false;
                }
                item.client = client.id;
                item.score = [];
                this.gusers.push(item);
            }
        }
        this.broadcast({key:"join", data:this.gusers});
        console.log('joined users', this.gusers.length);
    }

    requestJoin (options, isNewRoom: boolean) {
        return (options.create)
            ? (options.create && isNewRoom)
            : this.clients.length > 0;
    }

    onMessage (client, message: any) {
        if (message.action == 'test') {
            this.step = message.test - 1;
            var test = this.problems[this.step];
            test.step = message.test;
            this.broadcast({key:'test', data:test});
            console.log('res - test', message.test);
        } else if (message.action == 'select') {
            var selectCount = 0;
            this.gusers.forEach((user)=>{
                if (user.client == client.id) {
                    user.score[this.step] = message.select + 1;
                }
                if (user.score[this.step]) selectCount ++;
            });
            if (selectCount == this.gusers.length) {
                this.broadcast({key:'ready', data:this.step+1});
                console.log('res - ready', selectCount, this.step);
            }
        } else if (message.action == 'result') {
            this.gusers.forEach((user)=>{
                user.tscore = 0;
                for (var i=0; i<user.score.length; i++) {
                    if (user.score[i] == this.problems[i].c) {
                        user.tscore += 20;
                    }
                }
            });
            this.broadcast({key:'result', data: this.gusers});
            console.log("res - result");
        } else if (message.action == 'next') {
            this.broadcast({key:'next'});
            console.log("res - next");
        } else if (message.action == 'custom') {
            this.broadcast({key:'custom'});
        } else {
            console.log('unknown action', client, message);
        }

    }

    onLeave (client) {
        console.log("ChatRoom:", client.sessionId, "left!");
    }

}
