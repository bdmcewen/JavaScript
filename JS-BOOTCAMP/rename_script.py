import os
path = './'
files = os.listdir(path)

# print(files)

for index, file in enumerate(files):

    if file[0] == "j":  # use this line to add conditions to determien which files get renames
        oldName = file

        # use this line to define how the file name is changed.
        newName = oldName[8:]

        # print(oldName)
        # print(newName)
        # print()
        os.renames(oldName, newName)
