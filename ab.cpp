#include <iostream>
using namespace std;

int main() {
// 	cout<<"GfG!";

    string s;
    cin >> s;
    
    
    
    
    
    
    
    int n = s.size();
    int cl=0,cu=0;
    string s1 = "",s2 = "";
    
    for(int i=0;i<n;i++) {
        char ch = s[i];
        char c1,c2;
        
        if('a' <= s[i] and s[i] <= 'z') {
            cl++;
            c2 = ch-32;
            c1 = ch;
            
        }
        else {
            cu++;
            c1 = ch+32;
            c2 = ch;
        }
        s1 = s1 + c1;
        s2 = s2 + c2;
        
    }
    
    if(cl >= cu) {
        cout << s1 << "\n";
    }
    else {
        cout << s2 << "\n";
    }
    
    
    

	return 0;

    
    
}