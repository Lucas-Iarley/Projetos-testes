import speech_recognition as sr
'''
Recognizer 
é necessario esses dois para a captação de audio
Microphone
'''
rec = sr.Recognizer() 
#print(sr.Microphone().list_microphone_names()) #'Microfone (VIA HD Audio)' é o microfone
with sr.Microphone(1) as mic:
	rec.adjust_for_ambient_noise(mic)
	print('pode falar que eu vou gravar')
	audio = rec.listen(mic)
	texto = rec.recognize_google(audio, language="pt-BR")
	print(texto)

#o with fecha o microfone assim que saiu da TAB
#Ainda em desenvolvimento..

