from models import Coffee, CoffeeProfile
from config import db

def seed_coffees():
    test_coffees = []
    test_coffee_profiles = []
    test_coffee_1 = Coffee(
        id=1,
        name='Papua New Guinea Eastern Highlands',
        producer='Atlas Coffee Club',
        product_type='whole bean',
        weight=340,
        image='images/coffee_1.jpg',
        roast=20
    )
    test_coffee_1_profile = CoffeeProfile(
        id=1,
        country='Papua New Guinea',
        region='Eastern Highlands',
        farm='AAK',
        continent='Asia',
        altitude='very high',
        process='washed',
        is_specialty=True,
        coffee_id=1
    )

    test_coffee_2 = Coffee(
        id=2,
        name='India Tamil Nadu',
        producer='Atlas Coffee Club',
        product_type='whole bean',
        weight=340,
        image='images/coffee_2.jpg',
        roast=20
    )
    test_coffee_2_profile = CoffeeProfile(
         id=2,
        country='India',
        region='Tamil Nadu',
        farm='Riverdale Estates',
        continent='Asia',
        altitude='very high',
        process='washed',
        is_specialty=True,
        coffee_id=2
    )

    test_coffee_3 = Coffee(
        id=3,
        name='Classic Decaf',
        producer='Folgers',
        product_type='ground',
        weight=272,
        is_decaf=True,
        image='images/coffee_3.jpg',
        roast=50
    )
    test_coffee_3_profile = CoffeeProfile(
        id=3,
        coffee_id=3
    )

    test_coffee_4 = Coffee(
        id=4,
        name='Craft Instant Espresso Multiserve',
        producer='Blue Bottle',
        product_type='instant',
        weight=48,
        image='images/coffee_4.jpg',
        roast=70
    )
    test_coffee_4_profile = CoffeeProfile(
        id=4,
        coffee_id=4
    )

    test_coffee_5 = Coffee(
        id=5,
        name='Colombia Pink Bourbon Natural',
        producer='Paradise Coffee Roasters',
        product_type='whole bean',
        image='images/coffee_5.jpg',
        roast=10
    )
    test_coffee_5_profile = CoffeeProfile(
        id=5,
        country='Colombia',
        region='Huila',
        farm='Finca El Corozal',
        continent='South America',
        altitude='very high',
        process='Natural',
        is_specialty=True,
        variety='Colombian Pink Bourbon',
        coffee_id=5
    )
    test_coffees.extend([
        test_coffee_1,
        test_coffee_2,
        test_coffee_3,
        test_coffee_4,
        test_coffee_5
        ])
    test_coffee_profiles.extend([
        test_coffee_1_profile,
        test_coffee_2_profile,
        test_coffee_3_profile,
        test_coffee_4_profile,
        test_coffee_5_profile
        ])
    
    db.session.add_all(test_coffees + test_coffee_profiles)
     