from scholarly import scholarly
import json

print("[INFO] Searching for the author ...")
# Search for the author
search_query = scholarly.search_author('Corentin Chatelier')
author = next(search_query)

print("[INFO] Collecting data ...")
# Fill the author's profile
author = scholarly.fill(author)

print("[INFO] Extracting data ...")
# Extract relevant data
profile_data = {
    "name": author['name'],
    "affiliation": author.get('affiliation', 'N/A'),
    "h_index": author.get('hindex', 'N/A'),
    "i10_index": author.get('i10index', 'N/A'),
    "citations": author.get('citedby', 'N/A'),
    "publications": []
}

for pub in author['publications']:
    publication = scholarly.fill(pub)
    profile_data["publications"].append({
        "title": publication['bib']['title'],
        "year": publication['bib'].get('pub_year', 'N/A'),
        "citation": publication['num_citations']
    })
    
print("[INFO] Saving the data ...")
# Save the data as a JSON file
with open('scholar_profile.json', 'w') as f:
    json.dump(profile_data, f)

print("Profile data saved to scholar_profile.json")
