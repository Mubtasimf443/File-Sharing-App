read -p "Nest Route Name : " name;
nest generate module "$name";
nest generate controller "$name";
nest generate service "$name";