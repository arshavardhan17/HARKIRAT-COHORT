import nltk
from nltk.tokenize import sent_tokenize, word_tokenize

corpus = """Hello Welcome,to Krish Naik's NLP Tutorials.
Please do watch the entire course! to become expert in NLP.
"""

print("Sentence Tokenization:")
document =sent_tokenize(corpus)
for sentence in document:
    print(sentence)
print("word Tokenization")
for sentence in document:
    print(word_tokenize(corpus))
