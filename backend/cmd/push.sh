read -p "Commit Name : " commit;
git add .;
git commit -m "$commit";
git push -u origin main;