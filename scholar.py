from scholarly import scholarly
import json

print("[INFO] Searching for the author ...")
# Search for the author
author = scholarly.search_author_id(id = 'JMdqN-sAAAAJ',  filled = True, sortby = "year")
# author = next(search_query)

print("[INFO] Collecting data ...")
# Fill the author's profile
# author = scholarly.fill(author)

print("[INFO] Extracting data ...")
# Extract relevant data
profile_data = {
    "name": author['name'],
    "affiliation": author.get('affiliation', 'N/A'),
    "h_index": author.get('hindex', 'N/A'),
    "i10_index": author.get('i10index', 'N/A'),
    "citations": author.get('citedby', 'N/A'),
    "citations_per_year": author.get('cites_per_year', 'N/A'),
    "publications": []
}

index = 1
for pub in author['publications']:
    publication = scholarly.fill(pub)

    if publication['bib'].get('conference', 'N/A') == 'N/A' and publication['bib'].get('publisher', 'N/A') != 'N/A'  and publication['bib'].get('journal', 'N/A') != 'N/A' :
        print(index, publication['bib'].get('journal', 'N/A'), publication['bib'].get('publisher', 'N/A'), publication['bib'].get('conference', 'N/A'))
        profile_data["publications"].append({
        "index": index,
        "title": publication['bib']['title'],
        "journal": publication['bib'].get('journal', 'N/A'),
        "publisher": publication['bib'].get('publisher', 'N/A'),
        "conference": publication['bib'].get('conference', 'N/A'),
        "year": publication['bib'].get('pub_year', 'N/A'),
        "citation": publication['num_citations']
        })
        index += 1
        
    if publication['bib'].get('conference', 'N/A') == 'N/A' and publication['bib'].get('publisher', 'N/A') == 'N/A'  and publication['bib'].get('journal', 'N/A') == 'N/A' :
        print(index, publication['bib'].get('journal', 'N/A'), publication['bib'].get('publisher', 'N/A'), publication['bib'].get('conference', 'N/A'))
        profile_data["publications"].append({
        "index": index,
        "title": publication['bib']['title'],
        "journal": publication['bib'].get('journal', 'N/A'),
        "publisher": publication['bib'].get('publisher', 'N/A'),
        "conference": publication['bib'].get('conference', 'N/A'),
        "year": publication['bib'].get('pub_year', 'N/A'),
        "citation": publication['num_citations']
        })
        index += 1

profile_data_bis = {
    "name": author['name'],
    "affiliation": author.get('affiliation', 'N/A'),
    "h_index": author.get('hindex', 'N/A'),
    "i10_index": author.get('i10index', 'N/A'),
    "citations": author.get('citedby', 'N/A'),
    "citations_per_year": author.get('cites_per_year', 'N/A'),
    "publications": []
}

index -= 1
for pub in author['publications']:
    publication = scholarly.fill(pub)

    if publication['bib'].get('conference', 'N/A') == 'N/A' and publication['bib'].get('publisher', 'N/A') != 'N/A'  and publication['bib'].get('journal', 'N/A') != 'N/A' :
        print(index, publication['bib'].get('journal', 'N/A'), publication['bib'].get('publisher', 'N/A'), publication['bib'].get('conference', 'N/A'))
        profile_data_bis["publications"].append({
        "index": index,
        "title": publication['bib']['title'],
        "journal": publication['bib'].get('journal', 'N/A'),
        "publisher": publication['bib'].get('publisher', 'N/A'),
        "conference": publication['bib'].get('conference', 'N/A'),
        "year": publication['bib'].get('pub_year', 'N/A'),
        "citation": publication['num_citations']
        })
        index -= 1
        
    if publication['bib'].get('conference', 'N/A') == 'N/A' and publication['bib'].get('publisher', 'N/A') == 'N/A'  and publication['bib'].get('journal', 'N/A') == 'N/A' :
        print(index, publication['bib'].get('journal', 'N/A'), publication['bib'].get('publisher', 'N/A'), publication['bib'].get('conference', 'N/A'))
        profile_data_bis["publications"].append({
        "index": index,
        "title": publication['bib']['title'],
        "journal": publication['bib'].get('journal', 'N/A'),
        "publisher": publication['bib'].get('publisher', 'N/A'),
        "conference": publication['bib'].get('conference', 'N/A'),
        "year": publication['bib'].get('pub_year', 'N/A'),
        "citation": publication['num_citations']
        })
        index -= 1

print("[INFO] Saving the data ...")
# Save the data as a JSON file
with open('scholar_profile.json', 'w') as f:
    json.dump(profile_data_bis, f)

print("Profile data saved to scholar_profile.json")
