import pandas as pd
message =pd.read_csv('sms_data.csv', encoding='latin-1')

from sklearn.feature_extraction.text import CountVectorizer
cv=CountVectorizer(max_features=100,binary=True)