User.create(username:"Aaron Wertheim", password:"a", password_confirmation:"a", role:"Casting Director")
User.create(username:"Leah Davis", password:"a", password_confirmation:"a", role:"Casting Director")




Show.create(title: "Man Of The People", poster_url: "https://www.theatreinchicago.com/images/casting/Stage-Left-Theatre.jpg", company: "STAGE LEFT THEATRE", description: "MAN OF THE PEOPLE written by Dolores Diaz and directed by Anna C. Bahow: A charlatan doctor rises to power by pedaling a radical remedy in the days before medical regulation in the U.S", user_id: 2)
Show.create(title: "Ripcord", poster_url: "https://www.theatreinchicago.com/images/casting/parker-players.jpg", company: "Parker Players", description: "CIRCA Pintig is looking for actors for its Fall production of Panther in the Sky by Lani Montreal. Looking for African, Asian and Latino males ages 18-25 and females ages 30-45.", user_id: 1)
Show.create(title: "2022 Season", poster_url: "https://www.theatreinchicago.com/images/casting/chicago-carolers.jpg", company: "The Chicago Carolers", description: "Description: We are thrilled that you are considering auditioning for Parker Players' production of Ripcord by David Lindsay-Abaire. Directed by Richard Dominick Non-equity. There is no participation fee. There is no pay/stipend. Auditions: Monday 8/15 6:00 pm - 7:30 pm and Tuesday 8/16 6:00 pm - 7:30 pm Audition Location: St. Michaels Church 647 Dundee Avenue Barrington, IL 60010. Auditions held in 'Sturtz House' (245 Sturtz Street Barrington, IL 60010) next to St. Michaels Church. Please park in church parking lot accessed off of Dundee Avenue. Callbacks: TBD by the director after auditions are concluded. Time Commitment: Rehearsals: Begin Monday, September 12th. Rehearsals: Monday-Thursday 6:30pm - 9:00pm. One weekend morning/afternoon per week. Schedule confirmed based on actors' conflicts. Tec Week: November 6th - November 10th Performances: Friday November 11th 7:30pm, Saturday November 12th 7:30pm, Sunday November 13th 2:30pm Performance Location: The Garlands Center for the Performing Arts (1000 Garlands Lane Barrington, IL 60010) Material To Prepare: What to Prepare for Auditions: Nothing. Just be yourself and show up. Actors may be asked to read from the script. Sides will be provided. Please bring headshot and resume IF you have them. Bring your calendar to list conflicts.", user_id: 2)
Show.create(title: "Ernani", poster_url: "https://www.theatreinchicago.com/images/theatre/lyricopera2.jpg", company: "Lyric Opera", description: "Urgent request for submission of photo, resume and 1-minute self-taped video introduction. This is an urgent notice due to a last minute change and rehearsals begin August 15th Lyric Opera is seeking Black or African American Actor to understudy the non- singing, non-speaking role of Ernani's father. This is a 7 week AGMA contract paying $581.00 per week. There is a $1000.00 initiation fee to join AGMA ($500.00 for AEA members) and $100.00 in yearly dues. Ernani's father is assassinated at the beginning of the opera and appears to Ernani at pivotal moments throughout the opera.  Please Note: Lyric requires everyone entering the building to be fully vaccinated. This includes receiving booster shots when eligible. You will be wearing a mask covering your mouth and nose at all times except in performance. If cast, you will need to provide a copy of your COVID-19 vaccination record.", user_id: 1)
puts "Seeding done"