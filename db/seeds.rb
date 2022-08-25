User.create(username:"mWertheim", first_name: "Marty", last_name: "Wertheim", password:"Duck-soup1", password_confirmation:"Duck-soup1", role:"Casting Director", unread: 0)
User.create(username:"pLing", first_name: "Paul", last_name: "Ling", password:"Duck-soup1", password_confirmation:"Duck-soup1", role:"Casting Director", unread: 0)
User.create(username:"aWertheim", first_name: "Aaron", last_name: "Wertheim", password: "Duck-soup1", password_confirmation: "Duck-soup1", role: "Performer", unread: 0)
User.create(username:"kPellicone", first_name: "Kevin", last_name: "Pellicone", password: "Duck-soup1", password_confirmation: "Duck-soup1", role: "Performer", unread: 0)
User.create(username:"bLile", first_name: "Bear", last_name: "Lile", password: "Duck-soup1", password_confirmation: "Duck-soup1", role: "Performer", unread: 0)
User.create(username:"kKeeling", first_name: "Kevin", last_name: "Keeling", password: "Duck-soup1", password_confirmation: "Duck-soup1", role: "Performer", unread: 0)
User.create(username:"bBowman", first_name: "Bobby", last_name: "Bowman", password: "Duck-soup1", password_confirmation: "Duck-soup1", role: "Performer", unread: 0)
User.create(username:"iMaryfield", first_name: "Ian", last_name: "Maryfield", password: "Duck-soup1", password_confirmation: "Duck-soup1", role: "Performer", unread: 0)
User.create(username:"bRoach", first_name: "Brennan", last_name: "Roach", password: "Duck-soup1", password_confirmation: "Duck-soup1", role: "Performer", unread: 0)
User.create(username:"jJung", first_name: "Joon", last_name: "Jung", password: "Duck-soup1", password_confirmation: "Duck-soup1", role: "Performer", unread: 0)




Show.create(start_time: "10:00", 
            end_time: "17:00", 
            timeslot: 5, 
            audition_date: "2022-09-18", 
            title: "Man Of The People", 
            poster_url: "https://www.theatreinchicago.com/images/casting/Stage-Left-Theatre.jpg", 
            company: "STAGE LEFT THEATRE", 
            description: "MAN OF THE PEOPLE written by Dolores Diaz and directed by Anna C. Bahow: A charlatan doctor rises to power by pedaling a radical remedy in the days before medical regulation in the U.S", 
            user_id: 2)
Show.create(start_time: "12:00", 
            end_time: "18:00", 
            timeslot: 10, 
            audition_date: "2022-10-22", 
            title: "Ripcord", 
            poster_url: "https://www.theatreinchicago.com/images/casting/parker-players.jpg", 
            company: "Parker Players", 
            description: "We are thrilled that you are considering auditioning for Parker Players' production of Ripcord by David Lindsay-Abaire. Directed by Richard Dominick Non-equity. There is no participation fee. There is no pay/stipend. Audition Location: St. Michaels Church 647 Dundee Avenue Barrington, IL 60010. Auditions held in 'Sturtz House' (245 Sturtz Street Barrington, IL 60010) next to St. Michaels Church. Please park in church parking lot accessed off of Dundee Avenue. Callbacks: TBD by the director after auditions are concluded. Time Commitment: Rehearsals: Begin Monday, September 12th. Rehearsals: Monday-Thursday 6:30pm - 9:00pm. One weekend morning/afternoon per week. Schedule confirmed based on actors' conflicts. Tec Week: November 6th - November 10th Performances: Friday November 11th 7:30pm, Saturday November 12th 7:30pm, Sunday November 13th 2:30pm Performance Location: The Garlands Center for the Performing Arts (1000 Garlands Lane Barrington, IL 60010) Material To Prepare: What to Prepare for Auditions: Nothing. Just be yourself and show up. Actors may be asked to read from the script. Sides will be provided. Please bring headshot and resume IF you have them. Bring your calendar to list conflicts." , 
            user_id: 1)
Show.create(start_time: "08:00", 
            end_time: "15:00", 
            timeslot: 5, 
            audition_date: "2022-09-10", 
            title: "Our Town", 
            poster_url: "https://www.theatreinchicago.com/images/casting/groveplayers3.jpg", 
            company: "Grove Players", 
            description: "Auditions will be held at Saint Andrews Episcopal Church, Downers Grove, IL. Performances: November 11-20, Lincoln Center, Downers Grove, IL. Auditions will consist of cold readings, and sides/scene pairings. Feel free to prepare a monologue, but it is not required. We ask that actors please bring their headshots and resume (if you have one).", 
            user_id: 2)
Show.create(start_time: "09:00", 
            end_time: "16:00", 
            timeslot: 15, 
            audition_date: "2022-09-22", 
            title: "Antigone", 
            poster_url: "https://www.theatreinchicago.com/images/casting/playtime.jpg", 
            company: "PlayTime Theatre Company", 
            description: "Antigone written Sophocles and directed by Julie Szwedo: In the aftermath of a civil war in which the two sons of Oedipus, Eteocles and Polynieces, kill each other, the new king, Creon, tries to punish Polynieces for his disloyalty by not burying him properly. Antigone, the girl who will rise up alone and die young, decides to take fate into her own hands by directly disobeying Creon's law. The show will be done in the style of Baz Luhrmann's Romeo + Juliet with traditional classical language and modern music and setting. Antigone Character Breakdown: Eteocles (Male, 25-35) is the brother of Antigone, Ismene and Polyneices. He took control of Thebes after King Oedipus died, but then refused share the throne with his brother Polyneices. The two brothers fought and killed each other outside one of the city's seven gates - and that's when the real trouble began. Polyneices (Male, 25-35) is the brother of Antigone, Ismene and Eteocles. His name means 'many troubles', and he's generally remembered as 'the bad brother', because he attacked Thebes with a foreign army. While Eteocles was buried with full ritual honours, Polyneices was left as carrion for the crows, in punishment for the vile crime of assaulting his own city. Eurydice (Female, able to play 45+) is the wife of Creon (no relation to the other mythical Eurydice, the wife of Orpheus). She appears right at the end of the play Antigone, in profoundly wretched circumstances. Rehearsal and Audition Info: Rehearsals will be split between Olympia Park Field House in Edison Park, 60631 and second space TBA as needed. Schedule will be based around actor availability, looking at Thursdays, Fridays, and Sundays with a possible other weekday added as showtime approaches. ALL ACTORS MUST BE VACCINATED. Compensation will be share of profits split between cast and crew.", 
            user_id: 2)
Show.create(start_time: "11:00", 
            end_time: "17:00", 
            timeslot: 20, 
            audition_date: "2022-09-07", 
            title: "Stage Manager", 
            poster_url: "https://www.theatreinchicago.com/images/casting/elsinore-players.jpg", 
            company:"Elsinore Players", 
            description:"Show: Who's Afraid of Virginia Woolf. Seeking: We are seeking a stage manager to round out our production staff for Who's Afraid of Virginia Woolf. Rehearsals are currently underway (Tuesday, Thursday, Sunday) and performances are September 9-25 at 7:00 pm on Friday, Saturday, and Sunday in Elgin, Illinois. There is a stipend.", 
            user_id: 2)
Show.create(start_time: "08:00", 
            end_time: "18:00", 
            timeslot: 5, 
            audition_date: "2022-09-05", 
            title: "2022 Season", 
            poster_url: "https://www.theatreinchicago.com/images/casting/chicago-carolers.jpg", 
            company: "The Chicago Carolers", 
            description: "The Chicago Carolers are seeking new members to join us for the 2022 season! We are a group of professional singers and actors from the Chicagoland area. We sing carols of all kinds (traditional carols to modern favorites) in four-part harmony, and all of our carols are memorized. We dress in full Victorian costumes, and always bring a cheerful holiday spirit to events! We are currently looking for Sopranos, Altos, Tenors, and Basses to join our quartets.", 
            user_id: 1)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-09-01",
            title: "Junior Claus",
            poster_url: "https://www.theatreinchicago.com/images/casting/citadel-theatre-logo.jpg",
            company: "Citadel Theatre Company",
            description: "Citadel Theatre would like to announce auditions for their winter TYA show, Junior Claus - book and lyrics by Christopher Dimond & music by Michael Kooman; Directed by Gregg Dennhardt. Rehearsals begin 11/20/2022 (rehearses Sunday, Monday, and Wednesday from 6 pm - 10 pm). Performances: 12/20,12/21,12/22,12/23,12/24,12/27,12/28,12/29, 12/30 at 10:00am and 1:00pm." ,
            user_id: 2)
Show.create(start_time: "11:00",
            end_time: "18:00",
            timeslot: "5",
            audition_date: "2022-08-29",
            title: "Blue Heaven",
            poster_url: "https://www.theatreinchicago.com/images/theatre/blackensemble3.jpg",
            company: "Black Ensemble Theater",
            description: "The Black Ensemble Theater will hold in person auditions for it's upcoming mainstage musical Blue Heaven on Monday August 29th starting at 11am-6pm. Pay: CAT 4 Equity/ $350 per week Non-Union",
            user_id: 2)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-09-06",
            title: "tick, tick...BOOM!",
            poster_url: "https://www.theatreinchicago.com/images/casting/boho.jpg",
            company: "BoHo Theatre",
            description: "Boho Theatre is thrilled to announce auditions for our winter 2023 production of tick, tick...BOOM! by Jonathan Larson, directed by BoHo Artistic Associate, Bo Frazier!",
            user_id: 1)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-10-01",
            title: "White Christmas",
            poster_url: "https://www.theatreinchicago.com/images/casting/myers-dinner-theatre.jpg",
            company: "Myers Dinner Theatre",
            description: "Myers Dinner Theatre in Hillsboro, IN is seeking actors for White Christmas. Rehearsals begin November 8 and the show runs November 18 - December 18. Weekly pay and housing provided as well as free meals on show days. ",
            user_id: 1)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-10-30",
            title: "November 22nd",
            poster_url: "https://www.theatreinchicago.com/images/casting/generic.jpg",
            company: "Paradise Playhouse",
            description: "Paradise Playhouse is auditioning non-equity actors for a reading of 'The Silly Little Communist'--the first act of a new two act play on the assassination of JFK, entitled November 22nd, written by Jillann Gabrielle, which will be mounted in 2023. There is pay.",
            user_id: 1)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-09-14",
            title: "Set Designer",
            poster_url: "https://www.theatreinchicago.com/images/theatre/steelbeam.jpg",
            company: "Steel Beam Theatre",
            description: "Steel Beam Theatre, 111 W Main Street, St Charles seeks a part time Set Designer/Builder for their upcoming 2022-23 season. Compensation is commensurate with experience but begins at $18/hour.",
            user_id: 2)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-09-17",
            title: "The Immersive Tavern",
            poster_url: "https://www.theatreinchicago.com/images/casting/otherworld-theatre-logo.jpg",
            company: "Otherworld Theatre",
            description: "Please prepare one character to audition with. It can be an original character, or a character from pop culture. Be prepared to roleplay as this character and to answer questions as your character. Each session will be around 4 - 5 minutes.",
            user_id: 2)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-09-21",
            title: "A Midsummer Night's Cirque",
            poster_url: "https://www.theatreinchicago.com/images/casting/dominican.jpg",
            company: "Dominican University Performing Arts Center",
            description: "Dominican University Performing Arts Center is seeking actors with experience with Shakespeare for a non-equity production of A Midsummer Night's Cirque, a heavily-adapted, circus-themed rendition of Shakespeare's A Midsummer Night's Dream. All roles are open. Dance/movement and/or clowning experience a plus but not required.",
            user_id: 1)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-10-08",
            title: "Among The Dead",
            poster_url: "https://www.theatreinchicago.com/images/casting/jackalope.jpg",
            company: "Jackalope Theatre Company",
            description: "Jackalope Theatre is proud to announce auditions for our fall 2022 production of Among the Dead by Hansol Jung, Directed by Artistic Director Kaiser Ahmed. Sept. 20th - Oct. 19th* - Rehearsal Period (Mon.-Wed. 6-9pm, Sat. 11am-4pm). Nov. 4th - Dec. 4th* - Performance Run (Thurs.-Sat. At 7:30pm, Sundays at 3pm; off 11/24-11/25, added show on 11/28, possible extension to Dec. 12th).",
            user_id: 2)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-10-17",
            title: "Holiday Caroling",
            poster_url: "https://www.theatreinchicago.com/images/casting/frozen-robins.jpg",
            company: "The Frozen Robins",
            description: "he Frozen Robins are auditioning Bass/Baritones and Tenors for Christmas caroling quartet ensemble singing on Wednesday evening, September 7, 2022 (location to be announced). Gigs paid at hourly market rate.",
            user_id: 2)
Show.create(start_time: "10:00",
            end_time: "16:00",
            timeslot: "5",
            audition_date: "2022-10-09",
            title: "Vinegar Tom",
            poster_url: "https://www.theatreinchicago.com/images/casting/red-theater.jpg",
            company: "Red Theater",
            description: "Red Theater is thrilled to announce auditions for our fall 2022 production of Caryl Churchill's VINEGAR TOM, directed by co-Artistic Director Clare Brennan. Performances will run at The Edge Off Broadway, 1133 W Catalpa Ave, Chicago, IL 60640.",
            user_id: 1)

# Audition.create(desired_role: "Lead", audition_time: "11:00", user_id: 3, show_id: 1)
# Audition.create(desired_role: "Any", audition_time: "15:00", user_id: 4, show_id: 1)
# Audition.create(desired_role: "Lead", audition_time: "10:05", user_id: 5, show_id: 1)
# Audition.create( desired_role: "Doctor", audition_time: "12:30", user_id: 6, show_id: 1)
# Audition.create( desired_role: "Lead", audition_time: "11:15", user_id: 7, show_id: 1)
# Audition.create(desired_role: "Any", audition_time: "13:20", user_id: 8, show_id: 1)
# Audition.create(desired_role: "Any", audition_time: "15:00", user_id: 9, show_id: 1)
# Audition.create(desired_role: "Dude", audition_time: "14:50", user_id: 10, show_id: 1)

puts "Seeding done"