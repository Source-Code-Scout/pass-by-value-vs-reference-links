#include<iostream>
using namespace std;

void cantChangeInt(int a) {
    a = 9;
}

void canModifyArr(int b[]) {
    b[0] = 7;
}

void cantModifyArr(int c[]) {
    c = new int[3]{7, 8, 9};
}
void printArray(int a[],int n){
	for(int i=0;i<n;i++)
      cout<<a[i]<<" ";
  	cout<<endl;
}

int main () {
    int i = 1; 
    int arr[] = {0, 1, 2};
    int arr2[] = {1, 2, 3};

    cantChangeInt(i); // does not change (Example 1)
    cout << i << endl; // 1

    canModifyArr(arr); // modifies the array (Example 2)
    printArray(arr, 3); // 7 1 2

    cantModifyArr(arr2); // does not modify (Example 3)
    printArray(arr2, 3); // 1 2 3 

    return 0;
}