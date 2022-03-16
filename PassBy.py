i = 1
arr = [0, 1, 2]
arr2 = [1, 2, 3]


def cantChangeInt(a):
    a = 2


def changesArr(b):
    b[0] = 9


def cantChangeArr(c):
    c = [4, 5, 6]


cantChangeInt(i)  # does not modify (Example 1)
print(i)  # 1

changesArr(arr)  # modifies the array (Example 2)
print(arr)  # [9, 1, 2]

cantChangeArr(arr2)  # does not modify (Example 3)
print(arr2)  # [1, 2, 3]
