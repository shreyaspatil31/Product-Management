package com.example.ProductManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProductManagement.dto.ProductDTO;
import com.example.ProductManagement.entities.ProductEntity;
import com.example.ProductManagement.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository repo;

    @Autowired
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    // Get All Products
    public List<ProductEntity> getAllProducts() {
        return repo.findAll();
    }

    // Get Product by Id
    public Optional<ProductEntity> getProductById(Long id) {
        return repo.findById(id);
    }

    // Create new Product
    public ProductEntity createProduct(ProductDTO dto) {
        ProductEntity entity = new ProductEntity();

        // Copy data from DTO to Entity
        entity.setName(dto.getName());
        entity.setCategory(dto.getCategory());
        entity.setDescription(dto.getDescription());
        entity.setPrice(dto.getPrice());
        entity.setQuantity(dto.getQuantity());
        entity.setStatus(dto.getStatus());

        return repo.save(entity);
    }

    // Update Product Data
    public ProductEntity updateProduct(Long id, ProductDTO dto) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Product not found with id: " + id);
        }

        ProductEntity entity = repo.findById(id).get();

        // Update fields with DTO data
        entity.setName(dto.getName());
        entity.setCategory(dto.getCategory());
        entity.setDescription(dto.getDescription());
        entity.setPrice(dto.getPrice());
        entity.setQuantity(dto.getQuantity());
        entity.setStatus(dto.getStatus());

        return repo.save(entity);
    }

    // Delete Product
    public void deleteProduct(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Product not found with id: " + id);
        }
        repo.deleteById(id);
    }
}
