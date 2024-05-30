from scholarly import scholarly

# Search for the author
search_query = scholarly.search_author('Your Name')
author = next(search_query).fill()

# Extract relevant data
profile_data = {
    "name": author.name,
    "affiliation": author.affiliation,
    "h_index": author.hindex,
    "i10_index": author.i10index,
    "citations": author.citedby,
    "publications": []
}

for pub in author.publications:
    profile_data["publications"].append({
        "title": pub.bib['title'],
        "year": pub.bib.get('year', 'N/A'),
        "citation": pub.bib.get('cites', 0)
    })

# Save the data as a JSON file
import json
with open('scholar_profile.json', 'w') as f:
    json.dump(profile_data, f)
