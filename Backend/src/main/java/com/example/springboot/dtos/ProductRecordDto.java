package com.example.springboot.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ProductRecordDto(
    @NotBlank (message = "O nome não pode ser nulo ou vazio.")
    @Size(min=5, message = "O nome deve ter no mínimo 5 caracteres.")
    String nome,
    @NotNull (message = "O valor da CPU não pode ser nulo.")
    @Min(value = 1, message = "O valor da CPU não pode ser zero ou negativo.")
    int cpu,
    @NotNull (message = "O valor da memória não pode ser nula.")
    @Min(value = 1, message = "O valor da memória não pode ser zero ou negativa.")
    int memoria, 
    @NotNull (message = "O valor do disco não pode ser nulo.")
    @Min(value = 1, message = "O valor do disco não pode ser zero ou negativo.")
    int disco) {

}
