DROP DATABASE IF EXISTS surfinch;

CREATE DATABASE surfinch;

USE surfinch;

/* Table for the user info */
CREATE TABLE user_profile (
  userID INT NOT NULL AUTO_INCREMENT,
  username TEXT,
  email TEXT,
  avatar_pic TEXT,
  avatar_background TEXT,
  entries INT DEFAULT 0,
  logins INT DEFAULT 1,
  PRIMARY KEY (userID)
);

CREATE TABLE user_birds (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userID INT,
  bird TEXT,
  date date,
  birdpic_url TEXT,
  notes TEXT,
  street_sighted TEXT,
  city_sighted TEXT,
  state_sighted TEXT,
  longitude TEXT,
  latitude TEXT,
  user_profileID INT,
  CONSTRAINT user_profileID
  FOREIGN KEY (user_profileID)
    REFERENCES user_profile(userID)
);

CREATE TABLE user_friends (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userID INT,
  userBirdCount INT,
  friends INT,
  user_profileID INT,
  CONSTRAINT user_prof_friendsID
  FOREIGN KEY (user_profileID)
    REFERENCES user_profile(userID)
);

CREATE TABLE bird_data (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  common_name TEXT NOT NULL,
  species_code TEXT NOT NULL,
  category TEXT NOT NULL,
  taxon_order INT NOT NULL,
  com_name_codes TEXT,
  sci_name_codes TEXT,
  banding_codes TEXT,
  species_order TEXT,
  family_com_name TEXT,
  family_sci_name TEXT,
  report_as TEXT,
  extinct TEXT,
  extinct_year TEXT
);

INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Mr. Raymond', 'email@admin.com', 'goose', '#c8994d', 5, 29);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('AJP', 'AJP@admin.com', 'eagle', '#c8994d', 17, 14);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Shay', 'Shay@admin.com', 'hummingbird', '#c8994d', 2, 3);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Smitty', 'Smitty@admin.com', 'tropical', '#c8994d', 0, 7);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Regionald', 'Regionald@admin.com', 'crane', '#c8994d', 8, 2);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Shanna', 'shanna@admin.com', 'crane', '#c8994d', 8, 2);

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, street_sighted, city_sighted, state_sighted) VALUES (1, 'Humming bird', NOW(), '/uploads/hummingbird.jpg', 'I love this humming bird so much, look how cute!', '123 Sesame St', 'Cape Coral', 'Florida');


INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Blue above and white below, with a prominent crest and a bold black necklace. The wings and tail are barred with black, and it has a bold white wingbar.", "New Baltimore", "MI", '-82.736831', "42.681159", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Its bright blue mantle contrasts with a white breast. Its wings have intricate patterns of blue, black, and white.", "Ludington", "MI", '-86.412022', "43.974018", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Blue jays are loud and noisy, though they are uncharacteristically quiet during the nesting season.", "Macon", "GA", '-83.674944', "32.846583", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Male and female blue jays look alike with a white face, throat, and chin bordered by a prominent black necklace that extends from the nape to the breast.", "Edinboro", "PA", '-80.15905', "41.88166", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Brilliant red all over, with a reddish bill and black face immediately around the bill.", "Wilson", "WI", '-92.201359', "44.92717", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Pale brown overall with warm reddish tinges in the wings, tail, and crest", "New Cumberland", "WV", '-80.584208', "40.526908", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Both males and females have thick orange bills, but those of the male tend to have some black coloration.", "Jacksons Gap", "AL", '-85.833194', "32.873293", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Cardinals tend to sit low in shrubs and trees or forage on or near the ground, often in pairs.", "Grady", "AL", '-86.158263', "31.977073", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Bright emerald or golden-green on the back and crown, with gray-white underparts.", "Osterville", "MA", '-70.388089', "41.632841", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Hummingbirds are the only birds that can fly backwards", "Union", "ME", '-69.276211', "44.249963", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Bright emerald or golden-green on the back and crown, with gray-white underparts.", "Jamaica Plain", "MA", '-71.113238', "42.310135", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Their tiny legs are only used for perching and moving sideways while perched. They can’t walk or hop.", "Sacramento", "CA", '-121.349139', "38.687146", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "American Robin", NOW(), "uploads/robin.jpeg", "Gray-brown with warm orange underpart and dark head.", "Austell", "GA", '-84.589769', "33.787254", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "American Robin", NOW(), "uploads/robin.jpeg", "The male and female look surprisingly similar, although if you look closely, the female is a bit duller than the male", "Vandergrift", "PA", '-79.551984', "40.633373", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "American Robin", NOW(), "uploads/robin.jpeg", "Juvenile robins have a brown rather than red breast; they grow the red feathers after their first moult.", "Upper Marlboro", "MD", '-76.782063', "38.791458", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "American Robin", NOW(), "uploads/robin.jpeg", "Robins are omnivorous, eating everything from fruit to spiders.", "Franklinville", "NC", '-79.709915', "35.784254", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Raven", NOW(), "uploads/raven.jpeg", "Not just large but massive, with a thick neck, shaggy throat feathers, and a Bowie knife of a beak.", "Kingston", "MA", '-70.742522', "41.987465", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Raven", NOW(), "uploads/raven.jpeg", "They use very sophisticated nonvocal signals!", "Williamston", "NC", '-77.083011', "35.811418", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Raven", NOW(), "uploads/raven.jpeg", "Extremely Smart!!!", "Cedar Park", "TX", '-97.824803', "30.503628", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (1, "Raven", NOW(), "uploads/raven.jpeg", "They are scavengers with a varied diet that includes fish, meat, seeds, fruit, carrion, and garbage.", "Lucasville", "OH", '-83.00302', "38.911472", 1);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 1;


-- user 2 (15 entries) = AJP
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Blue above and white below, with a prominent crest and a bold black necklace. The wings and tail are barred with black, and it has a bold white wingbar.", "West Des Moines", "IA", '-93.741225', "41.566477", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Its bright blue mantle contrasts with a white breast. Its wings have intricate patterns of blue, black, and white.", "Lewisville", "NC", '-80.434096', "36.094273", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Blue jays are loud and noisy, though they are uncharacteristically quiet during the nesting season.", "Madison", "OH", '-81.04979', "41.771218", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Brilliant red all over, with a reddish bill and black face immediately around the bill.", "North Kingstown", "RI", '-71.459516', "41.59107", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Pale brown overall with warm reddish tinges in the wings, tail, and crest", "Luray", "VA", '-78.462098', "38.666793", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Both males and females have thick orange bills, but those of the male tend to have some black coloration.", "Millbrook", "AL", '-86.367443', "32.486736", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Bright emerald or golden-green on the back and crown, with gray-white underparts.", "Pittsford", "VA", '-72.997821', "43.725124", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Hummingbirds are the only birds that can fly backwards", "Stafford", "TX", '-95.570028', "29.629465", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Bright emerald or golden-green on the back and crown, with gray-white underparts.", "Nazareth", "PA", '-75.321376', "40.75327", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "American Robin", NOW(), "uploads/robin.jpeg", "Gray-brown with warm orange underpart and dark head.", "Prairieville", "LA", '-90.942624', "30.311503", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "American Robin", NOW(), "uploads/robin.jpeg", "The male and female look surprisingly similar, although if you look closely, the female is a bit duller than the male", "Wheat Ridge", "CO", '-105.100584', "39.77425", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "American Robin", NOW(), "uploads/robin.jpeg", "Juvenile robins have a brown rather than red breast; they grow the red feathers after their first moult.", "Winfield", "AL", '-87.789897', "33.918947", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Raven", NOW(), "uploads/raven.jpeg", "Not just large but massive, with a thick neck, shaggy throat feathers, and a Bowie knife of a beak.", "Towner", "ND", '-100.438665', "48.35845", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Raven", NOW(), "uploads/raven.jpeg", "They use very sophisticated nonvocal signals!", "Meeker", "CO", '-107.759553', "40.056021", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (2, "Raven", NOW(), "uploads/raven.jpeg", "Extremely Smart!!!", "High Ridge", "MO", '-90.524078', "38.474905", 2);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 2;

-- user 3 (10 entries) = Shay

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Blue above and white below, with a prominent crest and a bold black necklace. The wings and tail are barred with black, and it has a bold white wingbar.", "Milton", "NY", '-73.849557', "43.010599", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Its bright blue mantle contrasts with a white breast. Its wings have intricate patterns of blue, black, and white.", "Hagerstown", "MD", '-77.718907', "39.639579", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Brilliant red all over, with a reddish bill and black face immediately around the bill.", "Jamestown", "CA", '-120.467276', "37.891257", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Pale brown overall with warm reddish tinges in the wings, tail, and crest", "Willingboro", "NJ", '-74.884375', "40.029546", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Bright emerald or golden-green on the back and crown, with gray-white underparts.", "Somerdale", "NJ", '-75.026844', "39.842085", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Hummingbirds are the only birds that can fly backwards", "Minden", "NV", '-119.74138', "39.01023", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "American Robin", NOW(), "uploads/robin.jpeg", "Gray-brown with warm orange underpart and dark head.", "Arcadia", "CA", '-118.029184', "34.135112", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "American Robin", NOW(), "uploads/robin.jpeg", "The male and female look surprisingly similar, although if you look closely, the female is a bit duller than the male", "Richton Park", "IL", '-87.725819', "41.480848", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "Raven", NOW(), "uploads/raven.jpeg", "Not just large but massive, with a thick neck, shaggy throat feathers, and a Bowie knife of a beak.", "Medford", "OR", '-122.829243', "42.334784", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (3, "Raven", NOW(), "uploads/raven.jpeg", "They use very sophisticated nonvocal signals!", "Seattle", "WA", '-122.275593', "47.54055", 3);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 3;


-- user 4 (5 entries) = Regionald
INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (5, "Blue Jay", NOW(), "uploads/blue_jay.jpeg", "Blue above and white below, with a prominent crest and a bold black necklace. The wings and tail are barred with black, and it has a bold white wingbar.", "Richmond", "VA", '-77.509292', "37.423967", 5);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 5;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (5, "Cardinal", NOW(), "uploads/cardinal_thumb.webp", "Brilliant red all over, with a reddish bill and black face immediately around the bill.", "Edmond", "OK", '-97.481511', "35.65314", 5);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 5;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (5, "Hummingbird", NOW(), "uploads/hummingbird.jpg", "Bright emerald or golden-green on the back and crown, with gray-white underparts.", "Bedford", "OH", '-81.534817', "41.393876", 5);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 5;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (5, "American Robin", NOW(), "uploads/robin.jpeg", "Gray-brown with warm orange underpart and dark head.", "Montclair", "NJ", '-74.212664', "40.822167", 5);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 5;

INSERT INTO user_birds (userID, bird, date, birdpic_url, notes, city_sighted, state_sighted, longitude, latitude, user_profileID) VALUES (5, "Raven", NOW(), "uploads/raven.jpeg", "Not just large but massive, with a thick neck, shaggy throat feathers, and a Bowie knife of a beak.", "Watertown", "NY", '-75.911254', "43.972377", 5);
UPDATE user_profile SET entries = entries + 1 WHERE userID = 5;