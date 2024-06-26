package org.retaileasy.retaileasyserver.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.SourceType;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product {
    @OneToMany(mappedBy = "product", orphanRemoval = true)
    private Set<Barcode> barcodes = new HashSet<>();

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id", nullable = false)
    private Integer id;

    @Size(max = 150)
    @NotNull
    @Column(name = "product_name", nullable = false, length = 150)
    private String productName;

    @Size(max = 255)
    @Column(name = "product_image")
    private String productImage;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @Column(name = "manufactured_date")
    private Instant manufacturedDate;

    @Column(name = "expiry")
    private Instant expiry;

    @Column(name = "stock")
    private Integer stock;

    @Column(name = "price")
    private Integer price;

    @NotNull
    @Column(name = "import_price", nullable = false)
    private Integer importPrice;

    @ManyToOne(fetch = FetchType.LAZY)
    @ColumnDefault("2")
    @JoinColumn(name = "status_id")
    private Status status;

    @Column(name = "modified_date")
    @UpdateTimestamp(source = SourceType.DB)
    private Instant modifiedDate;

}
