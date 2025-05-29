words=["eating","eats","eaten","writing","writes","programming","programs","history","finally","finalized"]

##porter stemmer
from nltk.stem import PorterStemmer
stemming=PorterStemmer()
for words in words:
    print(words,"--->",stemming.stem(words))


##regex stemmer
print("Regex Stemmer")
from nltk.stem import RegexpStemmer
stemming=RegexpStemmer('ing$|s$|e$|able$', min=4)
for words in words:
    print(words,"--->",stemming.stem(words))

##snowball stemmer
from nltk.stem import SnowballStemmer
stemming=SnowballStemmer("english")
for words in words:
    print(words,"--->",stemming.stem(words))
