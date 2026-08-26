1. “Why can I not see my past purchases?”
    - As a user, I want to log in to my profile so that I can view my purchase history.
        - Requires purchases table that associates purchases with user_id.
2. “Some vendors have products but no history.”
    - As a user, I want to view vendor profiles to see their current and historic products.
        - Requires a vendor, product, and purchases table that track historic purchases and tie them to vendors.
3. “Track failed login attempts.”
    -  As an admin, I want to view login attempts to track suspicious activity.
        - Requires a login_attempts table that shows login attempt history with user id, timestamps, and if it was successful or not.
4. “I cannot recover my account.”
    - As a user, I want to have information stored to my profile, so I have ways of recovering my account.
        - Requires a user table with information such as phone number and email so user system can send recovery information to those addresses.
5.  “No timestamp on this transaction.”
    - As a user/vendor, I want to view when I purchased/sold a product for my receipts.
        - Requires a purchases table that records data relating to successful purchases such as price, quantity, and timestamp.
6. “Product ID does not match anything.”
    - As a vendor, I want to view my order receipts and match product ids to each one of my products.
        - Requires a product table that has a unique id for each product and associates them with a vendor id.
