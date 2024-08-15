section .data
    num1 dd 10
    num2 dd 5
    result dd 0

section .text
    global _start

_start:
    mov eax, [num1]
    add eax, [num2]
    mov [result], eax

    mov eax, [num1]
    sub eax, [num2]
    mov [result], eax

    mov eax, [num1]
    mov ebx, [num2]
    imul eax, ebx
    mov [result], eax

    mov eax, [num1]
    mov ebx, [num2]
    cdq
    idiv ebx
    mov [result], eax

    mov eax, 1
    xor ebx, ebx
    int 0x80