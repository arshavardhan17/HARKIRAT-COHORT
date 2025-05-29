words=["eating","eats","eaten","writing","writes","programming","programs","history","finally","finalized"]
from nltk.stem import WordNetLemmatizer
lemmatizer=WordNetLemmatizer()
for words in words:
    print(words,"--->",lemmatizer.lemmatize(words,pos="v"))