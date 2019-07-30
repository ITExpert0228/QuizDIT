import { Room } from "colyseus";

export class ChatRoom extends Room {
    // this room supports only 4 clients connected
    maxClients = 4;
    players = [];
    problems = [];

    onInit (options) {

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
                a1: 'More sales',
                a2: 'Higher commissions',
                a3: 'Spend less time per sale',
                a4: 'All of the above',
                c: 3
            },
            {
                q: 'Taking shortcuts in the Road to the Sale will save you time and make you money.',
                a1: 'True',
                a2: 'False',
                c:2
            },
            {
                q: 'When should you turnover a customer?',
                a1: 'As soon as they tell you they are not buying',
                a2: 'As soon as you feel you can\'t sell them a vehicle',
                a3: 'When they ask to speak to a manager',
                a4: 'When they ask for a brochure',
                c: 2
            },
            {
                q: 'When actively listening, you should…',
                a1: 'Respond to the customer as quickly as possible',
                a2: 'Start forming your reply even before the customer is finished talking',
                a3: 'Let the customer finish talking before forming your response',
                a4: 'What\'s the question, I wasn\'t listening?',
                c: 3
            },
            {
                q: 'You should follow the…',
                a1: 'ABC\'s',
                a2: 'ABG\'s',
                a3: 'None of the above',
                a4: 'All of the above',
                c: 2
            }
        ];

        console.log("BasicRoom created!", options);
    }

    onJoin (client, options) {
        console.log("chatRoom Joined", options);
        const obj = this;
        this.players.forEach(function(item){
            if ((item.uname == options.uname || item.email == options.uname) && item.pass == options.pwd) {
                var player = item;
                player.id = client.sessionId;
                player.success = 1;
                obj.broadcast(player);
            } else {
                var result = {success:0};
                obj.broadcast(result);
            }
        });
    }

    onLeave (client) {
        this.broadcast(`${ client.sessionId } left.`);
    }

    onMessage (client, data) {
        console.log("BasicRoom received message from", client.sessionId, ":", data);
        this.broadcast(`(${ client.sessionId }) ${ data.message }`);
    }

    onDispose () {
        console.log("Dispose BasicRoom");
    }

}
