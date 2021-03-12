
#include <iostream>

int main() {
  long long lol = 1;
  while(lol < 100) {
          std::cout<<"\x1B[2J\x1B[H";
          lol++;
  }